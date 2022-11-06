const { MongoClient } = require('mongodb')

const tweeUpdateHandler = async (req, res) => {
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

		const newCaravan = {
            name: name,
            image_url: image_url,
            description: description,
			destination: destination,
            uid: uid
        }

		// New caravan is populated by req using new values over old values where possible
        req.body.name ? newCaravan.name = req.body.newName : newCaravan.name = req.body.name
        req.body.image_url ? newCaravan.name = req.body.newImage_url : newCaravan.image_url = req.body.image_url
        req.body.description ? newCaravan.name = req.body.newDescription : newCaravan.image_url = req.body.description
		req.body.destination ? newCaravan.name = req.body.newDestination : newCaravan.image_url = req.body.destination
		req.body.uid ? newCaravan.name = req.body.newUid : newCaravan.image_url = req.body.uid


        

		const caravans = await collection.updateOne(newCaravan).toArray()

		return res.status(200).send({
			data: caravans
		})
	} catch (e) {
		console.error(e)
		return res.status(400).send({})
	}
}

module.exports = tweeUpdateHandler