const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

const dbView = async (id) => {
  const client = await MongoClient.connect(url);
  const db = await client.db("ponchsDb").collection("teachings");
  let res = await db.findOne({ _id: id });
  client.close();
  return res;
};

const dbWrite = async (name, data) => {
  const client = await MongoClient.connect(url);
  const db = await client.db("ponchsDb").collection("teachings");
  let res = await db.insertOne({ _id: name, data: data });
  return res;
};

exports.dbWrite = dbWrite;
exports.dbView = dbView;
