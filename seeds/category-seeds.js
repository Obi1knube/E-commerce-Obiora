const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;



// The goal of the category-seed.js file in this ORM is to seed the database with category data. 

// The file exports a function seedCategories that uses the bulkCreate method from the Category model
// to insert multiple category records into the database. The category data is defined in the categoryData array, 
// which contains objects with the category_name property.

// By running this seed file, the database will be populated with the categories specified in the categoryData array.