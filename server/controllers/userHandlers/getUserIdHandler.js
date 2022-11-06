const { MongoClient } = require('mongodb')

const userIdHandler = async (req, res) => {
	try {
		// Connection URL
		const url = process.env.MONGODB_URI
		const client = new MongoClient(url)
		// Database Name
		const dbName = 'non-prod'
		const collectionName = 'users'

		// Use connect method to connect to the server
		await client.connect()
		console.log('Connected successfully to server')
		const db = client.db(dbName)
		const collection = db.collection(collectionName)
		const caravans = await collection.findOne({ _id: req.params.id }).toArray()

		return res.status(200).send({
			data: caravans
		})
	} catch (e) {
		console.error(e)
		return res.status(400).send({})
	}
}

module.exports = userIdHandler
