const mongoose = require('mongoose');

// 定義數據模型
const petSchema = new mongoose.Schema({
  name: String,
  type: String,
  age: Number,
});

const Pet = mongoose.model('Pet', petSchema);

// 連接到MongoDB數據庫
mongoose.connect('mongodb://localhost/pet-shelter', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));

module.exports = Pet;