const express = require('express')
const db = require('./middleware/mongodb')
const app = express()
app.use(express.json())

console.log(process.env.ATLAS_URI)

if (db) console.log('collection true')
else console.log('collection false')

const collection = db.db('caravan-tigerhacks')
if (collection) console.log('collection true')
else console.log('collection false')
