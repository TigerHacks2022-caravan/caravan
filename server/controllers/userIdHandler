const { MongoClient } = require('mongodb')

const userIdHandler = async (req, res) => {
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

        if(!req.body) return res.status(400).send({message: 'Improper request'})

        const name = req.body.name
        const image_url = req.body.image_url
        const description = req.body.description
        const uid = req.body.uid

        if(!name || !image_url || !description || !uid) {
            return res.status(400).send({message: 'Invalid Input'})
        }

        const newCaravan = {
            name: name,
            image_url: image_url,
            description: description,
            uid: uid
        }

		const caravans = await collection.insertOne(newCaravan).toArray()

		return res.status(200).send({
			data: caravans
		})
	} catch (e) {
		console.error(e)
		return res.status(400).send({})
	}
}

module.exports = userIdHandler