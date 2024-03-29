const router = require("express").Router();
const { Product, Category, Tag, ProductTag } = require("../../models");

// The `/api/products` endpoint

// Get all products and include its associated Category and Tag data
router.get("/", (req, res) => {
  // find all products
  Product.findAll({
    include: [
      {
        model: Category,
        attributes: ["id", "category_name"],
      },
      {
        model: Tag,
        attributes: ["id", "tag_name"],
        through: ProductTag,
      },
    ],
  })
    .then((products) => res.json(products))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get one product and include its associated Category and Tag data
router.get("/:id", (req, res) => {
  // find a single product by its `id`
  Product.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Category,
        attributes: ["id", "category_name"],
      },
      {
        model: Tag,
        attributes: ["id", "tag_name"],
        through: ProductTag,
      },
    ],
  })

    .then((product) => {
      if (!product) {
        res.status(404).json({ message: "No product found with this id" });
        return;
      }
      res.json(product);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create new product
router.post("/", (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  Product.create(req.body)
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds && req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update product
router.put("/:id", (req, res) => {
  // update product data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      if (req.body.tagIds && req.body.tagIds.length) {
        ProductTag.findAll({
          where: { product_id: req.params.id },
        }).then((productTags) => {
          // create filtered list of new tag_ids
          const productTagIds = productTags.map(({ tag_id }) => tag_id);
          const newProductTags = req.body.tagIds
            .filter((tag_id) => !productTagIds.includes(tag_id))
            .map((tag_id) => {
              return {
                product_id: req.params.id,
                tag_id,
              };
            });

          // figure out which ones to remove
          const productTagsToRemove = productTags
            .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
            .map(({ id }) => id);

          // run both actions
          return Promise.all([
            ProductTag.destroy({ where: { id: productTagsToRemove } }),
            ProductTag.bulkCreate(newProductTags),
          ]);
        });
      }
      return res.json(product);
    })
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete one product by its `id` value
  Product.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      if (!product) {
        res.status(404).json({ message: "No product found with this id" });
        return;
      }
      res.json(product);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;






// The goal of the ./routes/api/product-routes.js file in this ORM is to define the API routes specifically for the Product model.


// In this snippet, the file exports an Express router instance (router) that handles the following API routes related to products:



// GET /api/products: Retrieves all products, including their associated category and tag data. It uses the Product.findAll() method with the include option to include the Category and Tag models. The attributes of the included models are specified to determine which columns to include in the response.

// GET /api/products/:id: Retrieves a single product by its ID, including its associated category and tag data. It uses the Product.findOne() method with the include option to include the Category and Tag models. The attributes of the included models are specified to determine which columns to include in the response.

// POST /api/products: Creates a new product. It uses the Product.create() method and passes the request body as the data for creating the product. If the request body includes tagIds, it also creates associations between the product and tags using the ProductTag model.

// PUT /api/products/:id: Updates a product by its ID. It uses the Product.update() method and passes the request body as the updated data. The update is based on the product's ID. If the request body includes tagIds, it updates the associations between the product and tags using the ProductTag model.

// DELETE /api/products/:id: Deletes a product by its ID. It uses the Product.destroy() method and specifies the product to delete based on its ID.


// These routes interact with the Product, Category, Tag, and ProductTag models using Sequelize methods to perform the corresponding CRUD operations and handle associations between the models.


// The router instance is exported to be used in other parts of the application, allowing the main API router (./routes/api/index.js) to mount these product routes under the /products URL path.