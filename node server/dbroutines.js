const MongoClient = require("mongodb").MongoClient;
const { atlas, appdb } = require("./config");
let db;
const loadDB = async () => {
  if (db) {
    console.log("using established connection");
    return db;
  }
  try {
    console.log("establishing new connection to Atlas");
    const client = await MongoClient.connect(atlas, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = client.db(appdb);
  } catch (err) {
    console.log(err);
  }
  return db;
};
const addOne = (db, coll, doc) => db.collection(coll).insertOne(doc);
const deleteAll = (db, coll) => db.collection(coll).deleteMany({});
const findOne = (db, coll, criteria) => db.collection(coll).findOne(criteria);
const findAll = (db, coll, criteria, projection) =>
  db.collection(coll).find(criteria).project(projection).toArray();
const findUniqueValues = (db, coll, field) =>
  db.collection(coll).distinct(field);
const updateOne = (db, coll, criteria, projection) =>
  db
    .collection(coll)
    .findOneAndUpdate(criteria, { $set: projection }, { rawResult: true });
const deleteOne = (db, coll, criteria) =>
  db.collection(coll).deleteOne(criteria);
module.exports = {
  loadDB,
  addOne,
  updateOne,
  deleteAll,
  deleteOne,
  findOne,
  findAll,
  findUniqueValues,
};
