var express = require('express')
var bodyParser = require('body-parser')
var server = express()

const authRouter = require('./auth/auth-router');

server.get('/', (req, res) => {
  res.send(`<h2>Welcome! Use My Tech Stuff API documentation <a href="https://github.com/BuildWeek-UseMy-Tech-Stuff/Back-End-Page/blob/master/README.md">here</a> </h2>`)
});

//custom middleware
// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
server.use(bodyParser.json())

server.use('/api/', authRouter);

module.exports = server;
