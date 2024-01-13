const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const { taskRouter } = require('./routes')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cookieParser())

// CORS middleware for demo purposes
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id");

  res.header(
      'Access-Control-Expose-Headers',
      'x-access-token, x-refresh-token'
  );

  next();
});

// Health check
app.get('/health', (req, res) => {
  res.status(200).send('OK')
})

// Api routes
app.use('/api/tasks', taskRouter)

// UI routes

module.exports = app
