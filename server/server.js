const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
require('dotenv').config()
const port = process.env.PORT || 5000

const tweeHandler = require('./controllers/tweeHandlers/tweeHandler')
const tweeIdHandler = require('./controllers/tweeHandlers/tweeIdHandler')

const getUserHandler = require('./controllers/userHandlers/getUserIdHandler')
const postUserHandler = require('./controllers/userHandlers/postUserHandler')

// routes
app.get('/', (req, res) => {
	res.send('Hello World')
})

// twee (caravan) routes
app.get('/twee', tweeHandler)
app.get('/twee/:id', tweeIdHandler)

// user routes
app.get('/user/:id', getUserHandler)
app.post('/user', postUserHandler)

// listener
app.listen(port)
