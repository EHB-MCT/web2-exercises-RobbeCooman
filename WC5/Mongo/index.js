
const { MongoClient } = require('mongodb');
const uri = "";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("session5").collection("boardgames");
  console.log('it works');
  console.log(collection);
  // perform actions on the collection object
  client.close();
});
