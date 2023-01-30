const products = [];

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    // this refers to the object created based on the class
    products.push(this);
  }

  // static to call this directly on the class and not the instantiated object
  static fetchAll() {
    // utility function
    return products;
  }
};
