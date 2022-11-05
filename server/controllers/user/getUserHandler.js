const getUserHandler = async (req, res) => {
	console.log('getUserHandler req: ', req)

	if (!res) return res.status(400).message('your request is pants. sorry mate')

	return res.status(200).send({
		ok: true,
		message: 'yay, success! tho not reflected in the db yet'
	})
}

export default getUserHandler
