const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "product",
        key: "id",
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "tag",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;



// The goal of the ./model/ProductTag.js file in this ORM is to define the ProductTag model and its associated columns. 


// In this snippet, the ProductTag model is defined by extending the Model class from Sequelize. 
// The model is initialized using the init method, which takes two arguments: an object defining the model's columns and an options object.

// The columns defined in the ProductTag model include:

// id: An auto-incrementing integer column that serves as the primary key.

// product_id: An integer column that references the id column of the product model.

// tag_id: An integer column that references the id column of the tag model.


// The options object passed to the init method specifies the Sequelize connection (sequelize),
// as well as additional configuration options such as disabling timestamps, using a specific table name, and using underscored naming conventions.

// Finally, the ProductTag model is exported from the module to be used in other parts of the application.

