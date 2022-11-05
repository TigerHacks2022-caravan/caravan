import clientPromise from '../lib/mongodb'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export async function getServerSideProps(context) {
	try {
		await clientPromise
		// `await clientPromise` will use the default database passed in the MONGODB_URI
		// However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
		//
		// `const client = await clientPromise`
		// `const db = client.db("myDatabase")`
		//
		// Then you can execute queries against your database like so:
		// db.find({}) or any of the MongoDB Node Driver commands

		return {
			props: { isConnected: true }
		}
	} catch (e) {
		console.error(e)
		return {
			props: { isConnected: false }
		}
	}
}

const Home = ({ isConnected }) => {
	console.log({ isConnected })
	return (
		<>
			<Head>
				<title>Home Page</title>
			</Head>
			<br />
			<div>Hallo hallo! this is my home page!</div>
		</>
	)
}

export default Home
