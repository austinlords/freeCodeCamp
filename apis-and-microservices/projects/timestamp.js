const express = require('express');
const app = express();
const debug = require('debug')('timestamp');

// Middleware
app.use(express.json());

app.get('/api/timestamp/:date_string?', (req, res) => {
  const unixTime = new Date(req.params.date_string);
  if (unixTime == 'Invalid Date')
    res.send({ "error" : "Invalid Date" });
  else res.send({"unix": unixTime.getTime(), "utc": unixTime.toUTCString()});
});

const port = process.env.PORT || 3000;
app.listen(port, () => debug(`listening on port ${port}....`));


