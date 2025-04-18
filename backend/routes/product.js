const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, price, description, image, createdBy } = req.body;
  const product = new Product({ name, price, description, image, createdBy });
  await product.save();
  res.status(201).json(product);
});

router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

module.exports = router;
