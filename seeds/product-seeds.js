const { Product } = require('../models');

const productData = [
  {
    product_name: 'Plain T-Shirt',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Running Sneakers',
    price: 90.0,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: 'Branded Baseball Hat',
    price: 22.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'Top 40 Music Compilation Vinyl Record',
    price: 12.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Cargo Shorts',
    price: 29.99,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;


// The goal of the product-seed.js file in this ORM is to seed the Product table in the database with initial data.
// The file exports a function seedProducts that uses the Product model to bulk create multiple product records in the database. 
// The productData array contains objects representing the properties of each product, such as the product name, price, stock, and category ID. 

// When the seedProducts function is executed, it uses the bulkCreate method provided by Sequelize to insert the data from the productData array into the Product table.
// This allows for efficient insertion of multiple records at once. 

// By running this file, the Product table will be populated with the sample data provided in the productData array. 
// This can be useful for testing, demonstration, or initializing the database with predefined data.
