const express = require('express')
// import express from 'express'
const app = express()
require('dotenv').config()
// import dotenv from 'dotenv'
// dotenv.config()
const port = process.env.PORT || 5000

const tweeHandler = require('./controllers/tweeHandler')
// import tweeHandler from 'controllers/tweeHandler'
// const tweeIdHandler = require('./controllers/tweeIdHandler')
// import tweeIdHandler from 'controllers/tweeIdHandler'

// // Connection URL
// const url = process.env.MONGODB_URI
// const client = new MongoClient(url)
// // Database Name
// const dbName = 'non-prod'

// // Use connect method to connect to the server
// await client.connect()
// console.log('Connected successfully to server')
// const db = client.db(dbName)
// const collection = db.collection('caravans')

// routes
app.get('/', (req, res) => {
	res.send('Hello World')
})

// app.get('/twee', (req, res) => {
// 	return tweeHandler(req, res, collection)
// })
app.get('/twee', tweeHandler)

// app.get('/twee/:id', tweeIdHandler)

// listener
app.listen(port)
