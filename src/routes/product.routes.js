const express = require("express");

const router = express.Router();

const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");
const { deleteAllProducts } = require("../services/product.services");

router
  .get("/products", getProducts)
  .post("/products", createProduct)
  .patch("/products/:id", updateProduct)
  .delete("/products/:id", deleteProduct)
  .delete("/products/delete/all", deleteAllProducts);

module.exports = router;
