const { MongoClient } = require("mongodb");

const tweeJoinHandler = async (req, res) => {
  try {
    // Connection URL
    const url = process.env.MONGODB_URI;
    const client = new MongoClient(url);
    // Database Name
    const dbName = "non-prod";

    // Use connect method to connect to the server
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("caravans");

    const updatedCaravan = req.body.updatedCaravan;
    updatedCaravan.userList.push(req.body.uid);

    await collection.updateOne(updatedCaravan);

    return res.status(200).send({});
  } catch (e) {
    console.error(e);
    return res.status(400).send({});
  }
};
module.exports = tweeJoinHandler;
