const express = require('express')
const { MongoClient } = require('mongodb')
const app = express()
// const cors = require('cors')
// require('dotenv').config({ path: '.env' })
require('dotenv').config()
const port = process.env.PORT || 5000
// app.use(cors())
// app.use(express.json())
// app.use(require('./routes/user'))
// get driver connection

// let db

// MongoClient.connect(
// 	process.env.MONGODB_URI,
// 	{ useNewUrlParser: true, useUnifiedTopology: true },
// 	function (err, client) {
// 		db = client.db('caravan-tigerhacks')
// 		app.listen(port)
// 	}
// )

// console.log('db: ', db)

// Connection URL
const url = process.env.MONGODB_URI
const client = new MongoClient(url)

// Database Name
const dbName = 'non-prod'

async function main() {
	// Use connect method to connect to the server
	await client.connect()
	console.log('Connected successfully to server')
	const db = client.db(dbName)
	const collection = db.collection('caravans')
	const caravans = await collection.find({}).toArray()
	console.log('caravans: ', caravans)
	// the following code examples can be pasted here...

	return 'done.'
}

main()
	.then(console.log)
	.catch(console.error)
	.finally(() => client.close())
