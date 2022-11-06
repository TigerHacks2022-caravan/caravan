const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
require('dotenv').config()
const port = process.env.PORT || 5000

const getTweeHandler = require('./controllers/tweeHandlers/getTweeHandler')
const joinTweeHandler = require('./controllers/tweeHandlers/joinTweeHandler')
const postTweeHandler = require('./controllers/tweeHandlers/postTweeHandler')
const putTweeHandler = require('./controllers/tweeHandlers/putTweeHandler')
const deleteTweeHandler = require('./controllers/tweeHandlers/deleteTweeHandler')

const getUserHandler = require('./controllers/userHandlers/getUserHandler')
const postUserHandler = require('./controllers/userHandlers/postUserHandler')
const putUserHandler = require('./controllers/userHandlers/putUserHandler')
// const deleteUserHandler = require('./controllers/userHandlers/deleteUserHandler')

// routes
app.get('/', (req, res) => {
	res.send('Hello World')
})

// twee (caravan) routes
app.get('/twee', getTweeHandler) // get all
app.get('/twee/:uid', joinTweeHandler) // get by id
app.post('/twee', postTweeHandler) // post
app.put('/twee', putTweeHandler) // put
app.delete('/twee/:id', deleteTweeHandler) // delete

// user routes
app.get('/user', getUserHandler) // get by name (no need to get all all)
app.post('/user', postUserHandler) // post
app.put('/user', putUserHandler) // put
// app.delete('/user/:id', deleteUserHandler) // delete

// listener
app.listen(port)
