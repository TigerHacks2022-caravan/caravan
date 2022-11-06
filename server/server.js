const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
require('dotenv').config()
const port = process.env.PORT || 5000

const tweeHandler = require('./controllers/tweeHandlers/tweeHandler')
const tweeIdHandler = require('./controllers/tweeHandlers/tweeIdHandler')
const newTweeHandler = require('./controllers/tweeHandlers/newTweeHandler')

const getUserHandler = require('./controllers/userHandlers/getUserIdHandler')
const postUserHandler = require('./controllers/userHandlers/postUserHandler')

// routes
app.get('/', (req, res) => {
	res.send('Hello World')
})

// twee (caravan) routes

app.get('/twee', tweeHandler)
app.get('/twee/:id', tweeIdHandler)
app.post('/twee', newTweeHandler)

// user routes
app.get('/user/:id', getUserHandler)
app.post('/user', postUserHandler)
app.put('/user')

// app.put('/twee/:id', tweeJoinHandler)

// live routes
app.get('')

// listener
app.listen(port)
