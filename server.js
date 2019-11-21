var express = require('express')
var bodyParser = require('body-parser')
var server = express()
var cors = require('cors')

const authRouter = require('./auth/auth-router');
const rentalRouter = require('./routes/rentalRouter');
const userRouter = require('./routes/userRouter');

server.use(cors())

server.get('/', (req, res) => {
  res.send(`<h2>Welcome! Use My Tech Stuff API documentation <a href="https://github.com/BuildWeek-UseMy-Tech-Stuff/Back-End-Page/blob/master/README.md">here</a> </h2>`)
});

//custom middleware
// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
server.use(bodyParser.json())

server.use('/api/', authRouter);

server.use('/api/rentals', rentalRouter);

server.use('/api/users', userRouter);

module.exports = server;
