const mongoose = require("mongoose");
const { Schema } = mongoose;
const productSchema = new Schema({
  title: { type: String, unique: true },
  description: String,
  price: { type: Number, min: [0, "Price atleast greater than one"] , default: 0},
  discountPercentage: Number,
  rating: {
    type: Number,
    min: [0, "wrong min rating"],
    max: [5, "wrong max rating"],
    default: 0,
  },
  stock: Number,
  brand: String,
  category: String,
  thumbnail: String,
  images: [String],
});
exports.Product = mongoose.model("Product", productSchema);
