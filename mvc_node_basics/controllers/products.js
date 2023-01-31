const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  // Rendering the add-product EJS/PUG template file
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',

    // Included for handlebar template
    formCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  // console.log(req.body);
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  // console.log('shop.js', adminData.products);
  // Render the EJS/PUG template file
  Product.fetchAll((products) => {
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
};
