import { MongoClient } from 'mongodb'

const options = {
	useUnifiedTopology: true,
	useNewUrlParser: true
}

let client
let clientPromise

const uri = process.env.MONGODB_URI

client = new MongoClient(uri, options)
clientPromise = client.connect()

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise
