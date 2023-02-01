const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  // Rendering the add-product EJS/PUG template file
  res.render('admin/add-product', {
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
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;
  const price = req.body.price;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products',
    });
  });
};
