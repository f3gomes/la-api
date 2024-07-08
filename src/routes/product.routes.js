const express = require("express");

const router = express.Router();

const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  deleteAllProducts,
} = require("../controllers/product.controller");

const auth = require("../middlewares/auth");

router
  .get("/products", auth, getProducts)
  .post("/products", auth, createProduct)
  .patch("/products/:id", auth, updateProduct)
  .delete("/products/:id", auth, deleteProduct)
  .delete("/products/delete/all", auth, deleteAllProducts);

module.exports = router;
