const express = require('express')

// userRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /user.
const userRoutes = express.Router()

// This will help us connect to the database
const dbo = require('../db/conn')

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require('mongodb').ObjectId

// This section will help you get a list of all the users.
userRoutes.route('/user').get((req, res) => {
	try {
		let db_connect = dbo.getDb()
		db_connect
			.collection('caravan-tigerhacks')
			.find({})
			.toArray((err, result) => {
				if (err) throw err
				res.json(result)
			})
	} catch (e) {
		console.log('get all user error: ', e)

		return res.status(500).send({
			ok: false,
			message: 'Error getting all users'
		})
	}	
})

// This section will help you get a single user by id
userRoutes.route('/user/:id').get((req, res) => {
	try {
		let db_connect = dbo.getDb() 
		let myquery = { _id: ObjectId(req.params.id) }
		db_connect
			.collection('caravan-tigerhacks')
			.findOne(myquery, (err, result) => {
				if (err) throw err
				res.json(result)
			})
	} catch (e) {
		console.log('get user error: ', e)

		return res.status(500).send({
			ok: false,
			message: 'Error getting user'
		})
	}
})

// This section will help you create a new user.
userRoutes.route('/user/add').post((req, res) => {
	try {
		let db_connect = dbo.getDb()
		let myobj = {
			name: req.body.name,
			position: req.body.position,
			level: req.body.level
		}
		db_connect
			.collection('caravan-tigerhacks')
			.insertOne(myobj, (err, res) => {
				if (err) throw err
				res.json(res)
			})
	} catch (e) {
		console.log('post user error: ', e)

		return res.status(500).send({
			ok: false,
			message: 'Error posting user'
		})
	}
})

// This section will help you update a user by id.
userRoutes.route('/update/:id').pos+t((req, res) => {
	try {
	let db_connect = dbo.getDb()
	let myquery = { _id: ObjectId(req.params.id) }
	let newvalues = {
		$set: {
			name: req.body.name,
			position: req.body.position,
			level: req.body.level
		}
	}
	db_connect
		.collection('caravan-tigerhacks')
		.updateOne(myquery, newvalues, (err, res) => {
			if (err) throw err
			console.log('1 document updated')
			res.json(res)
		})
	} catch (e) {
		console.log('post update error: ', e)

		return res.status(500).send({
			ok: false,
			message: 'Error posting update id'
		})
	}
})

// This section will help you delete a user
userRoutes.route('/:id').delete((req, res) =>  {
	try {
	let db_connect = dbo.getDb()
	let myquery = { _id: ObjectId(req.params.id) }
	db_connect
		.collection('caravan-tigerhacks')
		.deleteOne(myquery, (err, obj) => {
			if (err) throw err
			console.log('1 document deleted')
			res.json(obj)
		})
	} catch (e) {
		console.log('delete user error: ', e)

		return res.status(500).send({
			ok: false,
			message: 'Error deleting user'
		})
	}
})

module.exports = userRoutes
