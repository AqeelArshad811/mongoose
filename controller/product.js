const fs = require("fs");
const model = require("../model/product");
const Product = model.Product;
exports.createProduct = (req, res) => {
  //product.title = 'aqeel';
  const product = new Product(req.body);
  product.save();
  console.log(product);
  res.status(201).json(product);
};
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};
exports.getProduct = async (req, res) => {
  try{
  const id = req.params.id;
  const product = await Product.findById(id);
  res.json(product);
  }
  catch(err){
    console.log(err)
    res.status(400).json(err);
  }
};
exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  const doc = await Product.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  res.status(201).json(doc);
};

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.deleteOne({ _id: id });
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
