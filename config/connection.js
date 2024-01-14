require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;



// The goal of the connection.js file in this Object-Relational Mapping (ORM) setup
//  is to establish a connection to the MySQL database using the Sequelize package and environment variables.

// Here's a breakdown of the code:

// require('dotenv').config();: This line loads the environment variables from a .env file into the application's process environment.

// const Sequelize = require('sequelize');: This line imports the Sequelize package, which is an Object-Relational Mapping (ORM) tool for Node.js.

// const sequelize = process.env.JAWSDB_URL ? new Sequelize(process.env.JAWSDB_URL) :
//  new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, { host: 'localhost', dialect: 'mysql', dialectOptions: { decimalNumbers: true, }, });: 
//  This code creates a new Sequelize instance and configures it based on the environment variables.
//   It checks if there is a JAWSDB_URL environment variable (which is typically used for Heroku deployments) and uses it to establish a connection to the database.
//   If the JAWSDB_URL variable is not present, it falls back to using the DB_NAME, DB_USER, and DB_PASSWORD environment variables to connect to a local MySQL database.
//    The host is set to 'localhost', the dialect is set to 'mysql', and the dialectOptions are configured to enable decimal numbers.


// module.exports = sequelize;: This line exports the sequelize instance, making it available for other parts of the application to use for defining models 
// and executing database operations.

// By using environment variables, the sensitive database credentials (such as the database name, username, and password) are not hardcoded in the codebase, 
// but rather stored securely in the environment configuration. This approach helps to improve security and allows for easier deployment and
//  configuration across different environments.

