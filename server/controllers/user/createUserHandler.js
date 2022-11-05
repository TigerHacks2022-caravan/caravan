const createUserHandler = async (req, res) => {
	console.log('createUserHandler req: ', req)

	if (!res) return res.status(400).message('your request is pants. sorry mate')

	return res
		.status(200)
		.message('yay, success! tho not reflected in the db yet')
}

export default createUserHandler
