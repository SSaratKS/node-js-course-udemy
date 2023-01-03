const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  // Absolute path using __dirname
  console.log('shop.js', adminData.products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  const products = adminData.products;
  res.render('shop', { prods: products, docTitle: 'Shop' }); // Render the pug template
});

module.exports = router;
