'use strict';

const express = require('express');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const dns = require('dns');
const bodyParser = require('body-parser');
var cors = require('cors');

mongoose.Promise = require('bluebird');

var app = express();

// Basic Configuration 
var port = process.env.PORT || 3000;

/** this project needs a db !! **/ 
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

app.use(cors());

/** this project needs to parse POST bodies **/
// you should mount the body-parser here
app.use(bodyParser.urlencoded({ extended: true })); // will parse form data into a JSON object

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/views/index.html');
});

  
// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// Project POST
app.post("/api/shorturl/new", async (req, res) => {
  const host = validateURL(req.body.url);
  if (!host) return res.send({error: "invalid URL"});
  
  dns.lookup(host, (err, address, family) => {
    if (err) return res.send({error: 'URL does not exist'});
  });
  
  let largest = await Url.find().sort('-shortUrl').findOne() || 0;
  
  let newUrl = new Url({
    name: req.body.url,
    shortUrl: largest.shortUrl + 1 || 1
  });
  
  await newUrl.save();
  res.send({ "original_url": host,"short_url": newUrl.shortUrl });
});

// Project GET
app.get('/api/shorturl/:id', async (req, res) => {
  const short = await Url.findOne({ shortUrl: req.params.id });
  if (!short) return res.send('No URL has been assigned to this shortcut');
  else res.redirect(short.name);
});


app.listen(port, function () {
  console.log('Node.js listening ...');
});

function validateURL(url) {
  const regex = /https*:\/\/www\./;
  if (!url.match(regex)) return false;
  else return url.replace(regex, '');  
}

const Url = mongoose.model('Urls', new mongoose.Schema({
  name: { type: String, required: true },
  shortUrl: { type: Number, min: 1 }
}));