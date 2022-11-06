const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
require('dotenv').config()
const port = process.env.PORT || 5000

const tweeHandler = require('./controllers/tweeHandler')
const tweeJoinHandler = require('./controllers/tweeJoinHandler')
const newTweeHandler = require('./controllers/newTweeHandler')

// routes
app.get('/', (req, res) => {
	res.send('Hello World')
})


app.get('/twee', tweeHandler)

app.post('/twee', newTweeHandler)

app.put('/twee/:id', tweeJoinHandler)

// listener
app.listen(port)
