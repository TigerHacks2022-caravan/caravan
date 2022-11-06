const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000

const tweeHandler = require('./controllers/twee')

// routes
app.get('/', (req, res) => {
	res.send('Hello World')
})

app.get('/twee', tweeHandler)

// live routes
app.get('')

// listener
app.listen(port)
