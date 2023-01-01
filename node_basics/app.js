// const http = require('http');

// const server = http.createServer((req, res) => {
//   /* Ending the server using exit() */
//   // process.exit();
// });

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse the body
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
  console.log('In product middleware');
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"/><button type="submit">Add Product</button></form>'
  );
});

app.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

//This middleware needs to be placed at the bottom
app.use('/', (req, res, next) => {
  console.log('In home middleware');
  res.send('<h1>Hello From Express</h1>');
});

app.listen(3000);

// const server = http.createServer(app);
// server.listen(3000);
