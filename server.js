const express = require("express");
const routes = require("./routes");
// import sequelize connection
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});



// The goal of the index.js file in this ORM is to set up the Express.js server, configure the routes,
// establish a connection to the Sequelize database, and start the server.


// Here is a breakdown of the code snippet:

// Import the necessary dependencies:

// express: The Express.js framework for building web applications.

// routes: The module containing the defined routes for the application.

// sequelize: The Sequelize connection to the database.

// Create an instance of the Express.js app:

// const app = express();

// Set the port for the server to listen on:

// const PORT = process.env.PORT || 3001;

// Configure the app to parse JSON and URL-encoded data:

// app.use(express.json());

// app.use(express.urlencoded({ extended: true }));

// Set up the routes for the application:

// app.use(routes);

// Sync the Sequelize models to the database and start the server:

// sequelize.sync().then(() => { ... });

// This ensures that the database tables are created or updated based on the defined models.

// Once the synchronization is complete, the server is started and listens on the specified port:

// app.listen(PORT, () => { ... });


// Overall, the index.js file serves as the entry point for the application, where the server is configured, 
// routes are defined, and the database connection is established.


