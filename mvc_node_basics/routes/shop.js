const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('shop.js', adminData.products);
  const products = adminData.products;
  // Render the EJS/PUG template file
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
  });
});

module.exports = router;
