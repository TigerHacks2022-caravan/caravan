const { MongoClient } = require('mongodb')

const putUserHandler = async (req, res) => {
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

		if (!req.body) return res.status(400).send({ message: 'Improper request' })

		const newInfo = req.body.newUser
		const oldInfo = req.body.oldUser

		// const newUser = {
		//     // name: name,
		//     // location: location,
		//     // caravanList: caravanList
		// }

		// // New user is populated by req using new values over old values where possible   ||| Needs newValues to be passed in through req
		// newUser.name = (newInfo.name ? newInfo.name : oldInfo.name)
		// newUser.location = (newInfo.location ? newInfo.location :oldInfo.location)
		// newUser.caravanList = (newInfo.caravanList ? newInfo.caravanList : oldInfo.caravanList)

		const users = await collection.updateOne({ _id: oldInfo.uid }, newInfo)

		if (users.acknowledged == true) return res.status(200).send({ data: users })
		else return res.status(500).send({ message: 'Error updating database' })
	} catch (e) {
		console.error(e)
		return res.status(400).send({})
	}
}

module.exports = putUserHandler
