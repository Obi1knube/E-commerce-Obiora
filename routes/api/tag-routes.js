const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  try {
    // Find all tags and include their associated Product data
    const tags = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }],
    });
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    // Find a single tag by its `id` and include its associated Product data
    const tag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag }],
    });
    if (!tag) {
      res.status(404).json({ message: "Tag not found" });
      return;
    }
    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    // Create a new tag
    const tag = await Tag.create(req.body);
    res.status(201).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    // Update a tag's name by its `id` value
    const tag = await Tag.update(
      { tag_name: req.body.tag_name },
      { where: { id: req.params.id } }
    );
    if (tag[0] === 0) {
      res.status(404).json({ message: "Tag not found" });
      return;
    }
    res.status(200).json({ message: "Tag updated successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    // Delete a tag by its `id` value
    const tag = await Tag.destroy({ where: { id: req.params.id } });
    if (!tag) {
      res.status(404).json({ message: "Tag not found" });
      return;
    }
    res.status(200).json({ message: "Tag deleted successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;


// The goal of the ./routes/api/tag-routes.js file is to define the API routes related to tags in the ORM (Object-Relational Mapping) application. 
//These routes allow the client to perform CRUD (Create, Read, Update, Delete) operations on the tags.


// Here is a breakdown of the routes defined in the file:



// GET /api/tags: Retrieves all tags from the database and includes their associated product data. It returns a JSON response with the tags.



// GET /api/tags/:id: Retrieves a single tag by its id from the database and includes its associated product data. It returns a JSON response with the tag.



// POST /api/tags: Creates a new tag in the database based on the data provided in the request body. It returns a JSON response with the created tag.



// PUT /api/tags/:id: Updates the name of a tag in the database based on the id provided in the URL parameter. It returns a JSON response indicating the success of the update.



// DELETE /api/tags/:id: Deletes a tag from the database based on the id provided in the URL parameter. It returns a JSON response indicating the success of the deletion.




// These routes utilize the Sequelize models Tag, Product, and ProductTag to perform the necessary database operations and include the associated data when needed.

