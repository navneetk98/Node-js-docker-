const express = require('express');

const morgan = require('morgan');

const app = express();

app.use(morgan('common'));

app.get('/', function (req, res) {
  res.send('Hello new World\n');
});

app.get('/healthz', function (req, res) {
	// do app logic here to determine if app is truly healthy
	// you should return 200 if healthy, and anything else will fail
	// if you want, you should be able to restrict this to localhost (include ipv4 and ipv6)
  res.send('I am happy and healthy\n');
});

module.exports = app;
