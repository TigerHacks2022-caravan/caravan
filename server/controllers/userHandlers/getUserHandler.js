const { MongoClient } = require('mongodb')

const getUserHandler = async (req, res) => {
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
		const id = req.query.id
		const user = await collection.findOne({ _id: id })

		if (user) return res.status(200).send({ data: user })
		else return res.status(404).send({ message: 'user data not found' })
	} catch (e) {
		console.error(e)
		return res.status(400).send({})
	}
}

module.exports = getUserHandler
