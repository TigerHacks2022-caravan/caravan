const { MongoClient } = require('mongodb')

const joinTweeHandler = async (req, res) => {
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

		// Adds new uid to caravan uid array then updates caravan
		const caravan = req.body.caravan
		const uid = req.body.uid

		if (!uid || !caravan) {
			return res.status(400).send({ mesage: 'uid or caravan are invalid' })
		}

		caravan.userList.push(uid)

		const result = await collection.updateOne(
			{ _id: caravan.id },
			{ $set: caravan }
		)

		if (result.acknowledged == true) return res.status(200).send({})
		else return res.status(500).send({ message: 'error updating database' })
	} catch (e) {
		console.error(e)
		return res.status(400).send({})
	}
}
module.exports = joinTweeHandler
