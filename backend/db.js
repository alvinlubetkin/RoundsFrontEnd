const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

const dbView = async (collection, hash) => {
  const client = await MongoClient.connect(url);
  const db = await client.db("ponchsDb").collection(collection);
  let res = await db.findOne({ hash: hash });
  client.close();
  return res;
};

const dbWrite = async (collection, data) => {
  const client = await MongoClient.connect(url);
  const db = await client.db("ponchsDb").collection(collection);
  //this line should probably be called right before dbWrite in ExampleForm.js
  data.hash = data.date.concat(data.name);
  let res = await db.insertOne(data);
  client.close();
  return res;
};

exports.write = dbWrite;
exports.view = dbView;
