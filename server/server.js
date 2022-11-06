const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
require('dotenv').config()
const port = process.env.PORT || 5000

const tweeJoinHandler = require('./controllers/tweeHandlers/tweeJoinHandler')
const tweeHandler = require('./controllers/tweeHandlers/tweeHandler')
// const tweeJoinHandler = require('./controllers/tweeHandlers/tweeJoinHandler')
const tweeCreateHandler = require('./controllers/tweeHandlers/tweeCreateHandler')

const getUserHandler = require('./controllers/userHandlers/getUserIdHandler')
const postUserHandler = require('./controllers/userHandlers/postUserHandler')

// routes
app.get('/', (req, res) => {
	res.send('Hello World')
})

// twee (caravan) routes

app.get('/twee', tweeHandler)
app.get('/twee/:id', tweeJoinHandler)

// user routes
app.get('/user/:id', getUserHandler)
app.post('/user', postUserHandler)
app.post('/twee', tweeCreateHandler)

// app.put('/twee/:id', tweeJoinHandler)

// listener
app.listen(port)
