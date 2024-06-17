const Product = require("../models/Product");
const { StatusCode } = require("http-status-codes");

const createProduct = async (req, res) => {
//   res.send("create product");
    console.log(res.body);
    const product = await Product.create(req.body)
    res.status(StatusCode.CREATED).json({product})
};
const getAllProducts = async (req, res) => {
  res.send("list of product");
};

module.exports = {
  createProduct,
  getAllProducts,
};
