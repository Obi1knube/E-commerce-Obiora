const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;


// The goal of the ./routes/index.js file in this ORM is to define the main routing logic for the application. 


// In your snippet, you are creating an instance of the Express.js Router by calling express.Router(). This router will handle all the incoming requests and route them to the appropriate handlers.


// You are then importing the apiRoutes from the ./api file and using the router.use() method to mount those routes under the /api path. This means that any requests starting with /api will be handled by the apiRoutes.


// Finally, you have a fallback route defined using router.use() without a specific path. This route will be triggered for any requests that do not match the /api path. In this case, it will send a response with the message "Wrong Route!".


// By exporting the router instance, you are making it available for other parts of your application to use, typically in the main server.js file where you can mount it using app.use().

