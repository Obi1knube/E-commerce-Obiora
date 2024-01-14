const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);

module.exports = Tag;




// The goal of the ./model/Tag.js file in this ORM is to define the Tag model and its associated columns.

// In this snippet, the Tag model is defined by extending the Model class from Sequelize. 
// The model is initialized using the init method, which takes two arguments: an object defining the model's columns and an options object.

// The columns defined in the Tag model include:

// id: An auto-incrementing integer column that serves as the primary key.

// tag_name: A string column that represents the name of the tag. It is required and cannot be null.

// The options object passed to the init method specifies the Sequelize connection (sequelize),
// as well as additional configuration options such as disabling timestamps, using a specific table name, and using underscored naming conventions.

// Finally, the Tag model is exported from the module to be used in other parts of the application.