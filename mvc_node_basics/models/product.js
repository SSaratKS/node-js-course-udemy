const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    // this refers to the object created based on the class
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      // in arrow function this refers to the class
      products.push(this);
      fs.write(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  // static to call this directly on the class and not the instantiated object
  static fetchAll(cb) {
    // utility function
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }
};
