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
  // Render the pug template
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',

    // Included for handlebar template
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
    // layout: false,
  });
});

module.exports = router;
