const products = [];

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
  products.push({ title: req.body.title });
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  // console.log('shop.js', adminData.products);
  // Render the EJS/PUG template file
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
};
