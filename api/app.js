const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cookieParser())

// Health check
app.get('/health', (req, res) => {
  res.status(200).send('OK')
})

// Api routes

// UI routes

module.exports = app
