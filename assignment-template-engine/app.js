const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');
const path = require('path');

const app = express();
const users = [];

app.engine(
  'hbs',
  expressHbs.engine({ defaultLayout: 'main-layout', extname: 'hbs' })
);
app.set('view engine', 'ejs');
// app.set('view engine', 'hbs');
// app.set('view engine', 'pug');
app.set('views', 'views');

// Middleware to parse the body data
app.use(bodyParser.urlencoded({ extended: false }));

//Setting public as static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.render('index', { pageTitle: 'Add User' });
});

app.get('/users', (req, res, next) => {
  res.render('users', {
    pageTitle: 'Users',
    users: users,
    hasUsers: users.length > 0,
  });
});

app.post('/add-user', (req, res, next) => {
  users.push({ name: req.body.username });
  console.log('Users', users);
  res.redirect('/users');
});

app.listen(3000);
