const express = require("express");

const router = express.Router();

const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  deleteAllProducts,
  getProductById,
} = require("../controllers/product.controller");

const auth = require("../middlewares/auth");
const { validate, productSchema } = require("../middlewares/validation");

router
  .get("/products", auth, getProducts)
  .get("/products/:id", auth, getProductById)
  .post("/products", auth, validate(productSchema), createProduct)
  .patch("/products/:id", auth, validate(productSchema), updateProduct)
  .delete("/products/:id", auth, deleteProduct)
  .delete("/products/delete/all", auth, deleteAllProducts);

module.exports = router;
