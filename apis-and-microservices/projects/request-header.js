const express = require('express');
const app = express();
const debug = require('debug')('timestamp');

// Middleware
app.use(express.json());

app.get("/api/whoami", (req, res) => {
  const ip = req.ip;
  const lan = req.get('Accept-Language');
  const info = req.get('User-Agent');
  res.send({ "ipaddress": ip, "language": lan, "software": info });
});

const port = process.env.PORT || 3000;
app.listen(port, () => debug(`listening on port ${port}....`));
