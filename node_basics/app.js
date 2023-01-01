const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Middleware to parse the body data
app.use(bodyParser.urlencoded({ extended: false }));

// routers are filtered using '/admin'
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // console.log('Error Page Middleware');
  res.status(404).send('<h1>Page not Found</h1>');
});

app.listen(3000);
