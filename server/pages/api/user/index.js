import clientPromise from '../../../lib/mongodb'
import {
	createUserHandler,
	getUserHandler,
	updateUserHandler,
	deleteUserHandler
} from '../../../controllers/user'
import NextCors from 'nextjs-cors'

const userHandler = async (req, res) => {
	await NextCors(req, res, {
		methods: ['GET, POST, PUT, DELETE'],
		origin: '*',
		optionSuccessStatus: 200
	})

	const client = await clientPromise
	const db = client.db('Plartables Wholesalers')

	switch (req.method) {
		case 'GET':
			return getUserHandler(req, res)
		case 'POST':
			return createUserHandler(req, res)
		case 'PUT':
			return updateUserHandler(req, res)
		case 'DELETE':
			return deleteUserHandler(req, res)
		default:
			return res
				.status(400)
				.send({ ok: false, message: 'Request type not supported' })
	}
}

export default userHandler
