const { MongoClient } = require("mongodb");

const deleteTweeHandler = async (req, res) => {
  try {
    // Connection URL
    const url = process.env.MONGODB_URI;
    const client = new MongoClient(url);
    // Database Name
    const dbName = "non-prod";
    const collectionName = "caravans";

    // Use connect method to connect to the server
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const caravan = await collection.deleteOne({ _id: req.body.id }).toArray();

    return res.status(200).send({
      data: caravan,
    });
  } catch (e) {
    console.error(e);
    return res.status(400).send({});
  }
};
module.exports = deleteTweeHandler;
