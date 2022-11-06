const { MongoClient } = require('mongodb')

const newTweeHandler = async (req, res) => {
	try {
		// Connection URL
		const url = process.env.MONGODB_URI
		const client = new MongoClient(url)
		// Database Name
		const dbName = 'non-prod'

		// Use connect method to connect to the server
		await client.connect()
		console.log('Connected successfully to server')
		const db = client.db(dbName)
		const collection = db.collection('caravans')

		console.dir(req.body)
        // if(req.body == null) return res.status(400).send({message: 'Improper request'})

        const name = req.body.name
        const image_url = req.body.image_url
        const description = req.body.description
		const destination = req.body.destination
		const uid = req.body.uid
		const userList = [uid]

        if(!name || !image_url || !description || !destination || !uid) {
            return res.status(400).send({message: 'Invalid Input'})
        }

        const newCaravan = {
            name: name,
            image_url: image_url,
			destination: destination,
            description: description,
			uid: uid,
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

module.exports = newTweeHandler