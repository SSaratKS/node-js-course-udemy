const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Setting the template engine
app.set('view engine', 'ejs');

// Location of the templates
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');

// Middleware to parse the body data
app.use(bodyParser.urlencoded({ extended: false }));

//Setting public as static folder
app.use(express.static(path.join(__dirname, 'public')));

// routers are filtered using '/admin'
app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // console.log('Error Page Middleware');
  // Rendering the 404 EJS/PUG template file
  res.status(404).render('404', { pageTitle: 'Page Not Found', path: '' });
});

app.listen(3000);
