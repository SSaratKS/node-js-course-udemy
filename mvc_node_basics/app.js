const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

// Setting the template engine
app.set('view engine', 'ejs');

// Location of the templates
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');

// Middleware to parse the body data
app.use(bodyParser.urlencoded({ extended: false }));

//Setting public as static folder
app.use(express.static(path.join(__dirname, 'public')));

// routers are filtered using '/admin'
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
