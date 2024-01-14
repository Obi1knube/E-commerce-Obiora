const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();



// The goal of the ./seeds/index.js file in the ORM is to seed the database with initial data. 

// In the provided snippet, the file imports functions from separate seed files (category-seeds.js, product-seeds.js, tag-seeds.js, and product-tag-seeds.js). 
// These functions are responsible for inserting data into the respective tables in the database.

// The sequelize.sync({ force: true }) method is used to synchronize the models with the database and create the tables. 
// The force: true option drops the existing tables and recreates them.

// The seedAll function is an asynchronous function that executes the seed functions in a specific order using await. 
// After each seed function is executed, a log message is printed to indicate that the data has been seeded for that particular table.

// Finally, process.exit(0) is used to exit the Node.js process after the seeding is complete.

// By running seedAll(), the script will execute all the seed functions and populate the database with initial data.
