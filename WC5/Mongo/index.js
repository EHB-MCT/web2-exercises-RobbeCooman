
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://admin:admin@cluster0.rh9dt.mongodb.net/session5?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("session5").collection("boardgames");
  console.log('it works');
  console.log(collection);
  // perform actions on the collection object
  client.close();
});
