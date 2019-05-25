const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});


// Error Handling middleware
app.use((err, req, res, next) => {
  let errCode, errMessage;

  if (err.errors) {
    // mongoose validation error
    errCode = 400 // bad request
    const keys = Object.keys(err.errors)
    // report the first validation error
    errMessage = err.errors[keys[0]].message
  } else {
    // generic or custom error
    errCode = err.status || 500
    errMessage = err.message || 'Internal Server Error'
  }
  res.status(errCode).type('txt')
    .send(errMessage)
})

// APP FEATURES
app.post('/api/exercise/new-user', async (req, res) => {
  let { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  
  let user = req.body.username;
  
  let existingUser = await User.findOne({name: user});
  if (existingUser) return res.send('Username already exists');
  
  let newUser = new User({
    name: user
  });
  await newUser.save();
  
  res.send(`New user created! Your username is ${newUser.name}. You can now log exercises.`);
});

app.post('/api/exercise/add', async (req, res) => {
  let { error } = validateExercise(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  
  let user = req.body.username;
  
  const existingUser = await User.findOne({ name: user });
  if (!existingUser) return res.send('Username does not exist. Please create a user before logging an exercise.');
  
  if (!req.body.date) req.body.date = undefined;
  
  let exercise = new Exercise({
    user: existingUser.name,
    description: req.body.description,
    duration: parseInt(req.body.duration),
    date: req.body.date || new Date()
  });
    
  await exercise.save();
  res.send(`Exercise saved!....${exercise}`);
});

app.get('/api/exercise/log/:user/:from?/:to?/:limit?', async (req, res) => {
  let logs;
  
  if (req.params.from && req.params.to && req.params.limit) {
    logs = await Exercise
    .find({ user: req.params.user })
    .sort('date')
    .find({ date: { $gt: new Date(req.params.from), $lt: new Date(req.params.to) } })
    .limit(parseInt(req.params.limit));
  } else {
    logs = await Exercise
    .find({ user: req.params.user })
    .sort('date');
  }
  
  res.send(logs);
});

const User = mongoose.model('Users', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20
  }
}));

const Exercise = mongoose.model('Exercises', new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types,
    ref: 'User',
  },
  description: {
    type: String, 
    required: true,
    minlength: 3,
    maxlength: 255
  },
  duration: {
    type: Number,
    required: true
  }, 
  date: Date
}))

function validateUser(user) {
  const schema = {
    username: Joi.string().required().alphanum().min(3).max(20)
  }
  return Joi.validate(user, schema);
}

function validateExercise(exercise) {
  let schema = {
    username: Joi.string().required().alphanum().min(3).max(20),
    description: Joi.string().required().min(3).max(255),
    duration: Joi.number().required(),
    date: Joi.date().allow('').min('1-1-2000')
  }
  return Joi.validate(exercise, schema);
}

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
});
