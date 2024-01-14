const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;



The goal of the ./seeds/tag-seeds.js file is to seed the Tag table with initial data.


In this snippet, the Tag model is imported from the ../models directory.
 The tagData array contains objects that represent the tags to be inserted into the Tag table. Each object has a tag_name property,
  which represents the name of the tag.


The seedTags function uses the bulkCreate method of the Tag model to insert multiple rows into the Tag table at once.
 The tagData array is passed as an argument to the bulkCreate method.


Finally, the seedTags function is exported so that it can be used in other files, such as the main seeds/index.js file, to execute the seeding process.



