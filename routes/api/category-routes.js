const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

//GET all categories including its associated products
router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [{ model: Product }],
    });
    res.json(categories);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET a single category by id, include its associated Products
router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!category) {
      res.status(404).json({ message: "Category not found" });
      return;
    }
    res.json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//POST create a new category
router.post("/", async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//PUT update a category by id
router.put("/:id", async (req, res) => {
  try {
    const category = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!category[0]) {
      res.status(404).json({ message: "Category not found" });
      return;
    }
    res.json({ message: " Category updated" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//DELETE a category by id
router.delete("/:id", async (req, res) => {
  try {
    const category = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!category) {
      res.status(404).json({ message: "Category not found" });
      return;
    }
    res.json({ message: "category deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;


// The goal of the ./routes/api/category-routes.js file in this ORM is to define the API routes for performing CRUD operations on the Category model.


// In this snippet, the file exports an Express router instance (router) that handles the following API routes:



// GET /api/categories: Retrieves all categories, including their associated products. It uses the Category.findAll() method with the include option to include the Product model.

// GET /api/categories/:id: Retrieves a single category by its ID, including its associated products. It uses the Category.findByPk() method with the include option to include the Product model.

// POST /api/categories: Creates a new category. It uses the Category.create() method and passes the request body as the data for creating the category.

// PUT /api/categories/:id: Updates a category by its ID. It uses the Category.update() method and passes the request body as the updated data. The update is based on the category's ID.

// DELETE /api/categories/:id: Deletes a category by its ID. It uses the Category.destroy() method and specifies the category to delete based on its ID.


// For each route, there is error handling in case of any exceptions or errors. If an error occurs, it logs the error and sends an appropriate error response.


// The router instance is exported to be used in other parts of the application.

