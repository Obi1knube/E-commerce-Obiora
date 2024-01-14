// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


//Define associations

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});


// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};




// The goal of the ./models/index.js file in the ORM is to import the model files for each table (Product, Category, Tag, ProductTag) 
// and define the associations between them.


// In this specific code snippet, the associations are defined using Sequelize's association methods. 

// Product belongs to Category, meaning that a product can only belong to one category. The foreign key category_id is used to establish this relationship.

// Category has many Product models, meaning that a category can have multiple products. The foreign key category_id is used to establish this relationship.

// Product belongs to many Tag models, and Tag belongs to many Product models. This is a many-to-many relationship, 
// and the association is defined through the ProductTag model. The foreign key product_id is used to establish this relationship.

// Tag belongs to many Product models, and Product belongs to many Tag models. This is the other side of the many-to-many relationship,
// also defined through the ProductTag model. The foreign key tag_id is used to establish this relationship.


// Finally, the exported object includes all the imported models, making them accessible from other parts of the application.