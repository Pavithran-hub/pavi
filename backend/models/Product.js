const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  createdBy: String,
  bids: [
    {
      amount: Number,
      user: String,
      time: Date
    }
  ]
});

module.exports = mongoose.model('Product', ProductSchema);
