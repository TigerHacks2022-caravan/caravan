const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
require('dotenv').config()
const port = process.env.PORT || 5000

<<<<<<< HEAD
const tweeHandler = require('./controllers/tweeHandler')
const tweeJoinHandler = require('./controllers/tweeJoinHandler')
const newTweeHandler = require('./controllers/tweeCreateHandler')
=======
const tweeHandler = require('./controllers/tweeHandlers/tweeHandler')
const tweeIdHandler = require('./controllers/tweeHandlers/tweeIdHandler')
// const tweeJoinHandler = require('./controllers/tweeHandlers/tweeJoinHandler')
const newTweeHandler = require('./controllers/tweeHandlers/newTweeHandler')

const getUserHandler = require('./controllers/userHandlers/getUserIdHandler')
const postUserHandler = require('./controllers/userHandlers/postUserHandler')
>>>>>>> 22b88a6a33d750e21f28a9ff4f9ab2268ce9f62b

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
app.post('/twee', newTweeHandler)

// app.put('/twee/:id', tweeJoinHandler)

// listener
app.listen(port)
