const express = require('express')
const connectPromise = require('./middleware/mongodb')
const app = express()
app.use(express.json())

console.log(process.env.ATLAS_URI)

const db = connectPromise.db('caravan-tigerhacks')

if (db) console.log('db: ', db)
else console.log('collection false')

const collection = db.collection('sample_geospacial')
if (collection) console.log('collection true')
else console.log('collection false')
