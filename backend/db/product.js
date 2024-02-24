const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  id: String,
  image: String,
  company: String,
  item_name: String,
  original_price: Number,
  current_price: Number,
  discount_percentage: Number,
  return_period: Number,
  delivery_date: String,
  rating: { stars: Number, count: Number },
});
module.exports = mongoose.model("products", productSchema);
