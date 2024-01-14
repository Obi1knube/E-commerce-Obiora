const { ProductTag } = require('../models');

const productTagData = [
  {
    product_id: 1,
    tag_id: 6,
  },
  {
    product_id: 1,
    tag_id: 7,
  },
  {
    product_id: 1,
    tag_id: 8,
  },
  {
    product_id: 2,
    tag_id: 6,
  },
  {
    product_id: 3,
    tag_id: 1,
  },
  {
    product_id: 3,
    tag_id: 3,
  },
  {
    product_id: 3,
    tag_id: 4,
  },
  {
    product_id: 3,
    tag_id: 5,
  },
  {
    product_id: 4,
    tag_id: 1,
  },
  {
    product_id: 4,
    tag_id: 2,
  },
  {
    product_id: 4,
    tag_id: 8,
  },
  {
    product_id: 5,
    tag_id: 3,
  },
];

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;



// The goal of the ./seeds/product-tag-seeds.js file is to seed the ProductTag table with initial data. 


// In this snippet, the ProductTag model is imported from the ../models directory.
//  The productTagData array contains objects that represent the relationships between products and tags. 
//  Each object has a product_id and a tag_id, indicating which product is associated with which tag.


// The seedProductTags function uses the bulkCreate method of the ProductTag model to insert multiple rows into the ProductTag table at once.
//  The productTagData array is passed as an argument to the bulkCreate method.


// Finally, the seedProductTags function is exported so that it can be used in other files, such as the main seeds/index.js file, to execute the seeding process.



