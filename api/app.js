const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const { taskRouter } = require('./routes')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cookieParser())

// Health check
app.get('/health', (req, res) => {
  res.status(200).send('OK')
})

// Api routes
app.use('/api/tasks', taskRouter)

// UI routes

module.exports = app
