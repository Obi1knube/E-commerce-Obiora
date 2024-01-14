const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;



// The goal of the ./routes/api/index.js file in this ORM is to define the main API router for the application. It acts as a central hub for all the API routes by importing and using the specific route files.


// In this snippet, the file exports an Express router instance (router) that handles the following:



// Importing the route files for categories, products, and tags using require(). These route files (category-routes.js, product-routes.js, and tag-routes.js) contain the specific API routes for each resource.

// Using the router.use() method to mount the imported route files on specific URL paths:

// '/categories' is mounted with the categoryRoutes router, which contains the API routes for categories.

// '/products' is mounted with the productRoutes router, which contains the API routes for products.

// '/tags' is mounted with the tagRoutes router, which contains the API routes for tags.




// By using router.use(), the routes defined in the imported route files will be accessible under the specified URL paths.


// Finally, the router instance is exported to be used in other parts of the application, allowing the main server file to use this API router as a middleware to handle API requests.

