const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;




// The goal of the category.js file in this Object-Relational Mapping (ORM) setup 
// is to define the Category model using Sequelize.


// Here's a breakdown of the code:

// const { Model, DataTypes } = require("sequelize");: This line imports the Model and DataTypes classes
//  from the Sequelize package. The Model class is used as the base class for defining models,
//  and the DataTypes class provides the data types that can be used for defining columns in the model.

// const sequelize = require("../config/connection.js");: This line imports the sequelize instance, 
// which is the connection to the database, from the connection.js file.

// class Category extends Model {}: This line defines the Category class, which extends the Model 
// class provided by Sequelize. This class will represent the categories table in the database.

// Category.init({...}, {...}): This block of code initializes the Category model by defining the columns and 
// providing the model options.

// The first object passed to init() defines the columns of the categories table. 
// In this case, there are two columns:

// id: An auto-incrementing integer column that serves as the primary key.

// category_name: A string column that stores the name of the category.

// The second object passed to init() provides the model options:

// sequelize: The sequelize instance, which represents the connection to the database.

// timestamps: false: Disables the automatic creation of createdAt and updatedAt columns.

// freezeTableName: true: Prevents Sequelize from pluralizing the table name.

// underscored: true: Uses underscored naming convention for the columns (e.g., category_name instead of categoryName).

// modelName: "category": Sets the model name to "category".

// module.exports = Category;: This line exports the Category model, making it available for other parts
//  of the application to use when performing database operations.


// By defining the Category model, this file allows you to interact with the categories table in the
//  database using Sequelize. You can create, read, update, and delete category records using the methods
//   provided by Sequelize for the Category model.

