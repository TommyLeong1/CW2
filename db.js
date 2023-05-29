const { MongoClient, ServerApiVersion } = require('mongodb');

const mongoose = require('mongoose');

// 定義數據模型
const petSchema = new mongoose.Schema({
  name: String,
  type: String,
  age: Number,
});


const Pet = mongoose.model('Pet', petSchema);

const uri = "mongodb+srv://leongtommy123:<Twice=3=nayeon>@cluster0.xbanbru.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

// 連接到MongoDB數據庫
mongoose.connect('mongodb://localhost/pet-shelter', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));

module.exports = Pet;
run().catch(console.dir);