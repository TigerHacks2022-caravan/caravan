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

		const newCaravanInfo = req.body.newCaravan
		const oldCaravanInfo = req.body.oldCaravan

		// const newCaravan = {
        //     name: name,
        //     image_url: image_url,
        //     description: description,
		// 	destination: destination,
        //     uid: uid
        // }

		// // New caravan is populated by req using new values over old values where possible
        // newCaravan.name = (newCaravanInfo.name ? newCaravanInfo.name : oldCaravanInfo.name)
        // newCaravan.image_url = (newCaravanInfo.image_url ? newCaravanInfo.image_url : oldCaravanInfo.image_url)
        // newCaravan.description = (newCaravanInfo.description ? newCaravanInfo.description : oldCaravanInfo.description)
        // newCaravan.destination = (newCaravanInfo.destination ? newCaravanInfo.destination : oldCaravanInfo.destination)
        // newCaravan.uid = (newCaravanInfo.uid ? newCaravanInfo.uid : oldCaravanInfo.uid)



		const caravans = await collection.updateOne({_id: oldCaravanInfo.name}, newCaravanInfo)

		if(caravans.acknowledged == true) return res.status(200).send({data: caravans})
		else return res.status(500).send({message: 'Error updating database'})
	} catch (e) {
		console.error(e)
		return res.status(400).send({})
	}
}

module.exports = tweeUpdateHandler