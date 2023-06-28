const { MongoClient } = require('mongodb')

const postTweeHandler = async (req, res) => {
	try {
		// Connection URL
		const url = process.env.MONGODB_URI
		const client = new MongoClient(url)
		// Database Name
		const dbName = 'non-prod'
		const collectionName = 'caravans'

		// Use connect method to connect to the server
		await client.connect()
		console.log('Connected successfully to server')
		const db = client.db(dbName)
		const collection = db.collection(collectionName)

		console.dir(req.body)
		// if(req.body == null) return res.status(400).send({message: 'Improper request'})

		const name = req.body.name
		const description = req.body.description
		const destination = req.body.destination
		const location = req.body.location
		const ownerId = req.body.ownerId
		const userList = [ownerId]

		if (!name || !description || !destination || !ownerId || !location) {
			return res.status(400).send({ message: 'Invalid Input' })
		}

		const newCaravan = {
			name: name,
			description: description,
			destination: destination,
			location: location,
			ownerId: ownerId,
			userList: userList
		}

		const caravans = await collection.insertOne(newCaravan)

		return res.status(200).send({
			data: caravans
		})
	} catch (e) {
		console.error(e)
		return res.status(400).send({})
	}
}

module.exports = postTweeHandler
