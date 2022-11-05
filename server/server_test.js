const express = require('express')
const { MongoClient } = require('mongodb')

console.log(process.env.ATLAS_URI)

const client = new MongoClient(
	'mongodb+srv://CaravanDB:peVrOhJJbiLjWuux@caravan-tigerhacks.149uuzb.mongodb.net/employees?retryWrites=true&w=majority'
)

const connectDB = async () => {
	try {
		await client.connect()
		console.log('successful connection to atlas')
		module.exports = client.db('Caravan-TigerHacks2022')
		const app = require('server')
		app.listen(5000)
	} catch (e) {
		console.log('error connecting to atlas: ', e.stack)
	} finally {
		await client.close()
	}
}

connectDB()

// const express = require('express')
// const db = require('./middleware/mongodb')
// const app = express()
// app.use(express.json())

// console.log(process.env.ATLAS_URI)

// if (db) console.log('collection true')
// else console.log('collection false')

// const collection = db.db('caravan-tigerhacks')
// if (collection) console.log('collection true')
// else console.log('collection false')
