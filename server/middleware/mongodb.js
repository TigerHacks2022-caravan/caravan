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

// connectDB()	// test connectDB
