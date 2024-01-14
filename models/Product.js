// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection.js");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;



// The goal of the ./models/Product.js file in the ORM is to define the Product model,
//  which represents the products table in the database.

// In this specific code snippet:

// The important parts of the Sequelize library, Model and DataTypes, are imported.

// The database connection from ../config/connection.js is imported.

// The Product model is initialized by extending the Model class provided by Sequelize.

// The fields and rules for the Product model are set up using the init() method.
//  Each field corresponds to a column in the products table.

// The id field is an auto-incrementing primary key of type INTEGER.

// The product_name field is a non-null string.

// The price field is a non-null decimal number,
// and it is validated to ensure it is a valid decimal value.


// The stock field is a non-null integer with a default value of 10, 
// and it is validated to ensure it is a valid numeric value.

// The category_id field is a foreign key that references the id column of the category table.

// The sequelize connection, along with other configuration options,
//  is passed to the init() method to define the model.

// Finally, the Product model is exported to be used in other parts of the application.