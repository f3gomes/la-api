const productServices = require("../services/product.services");

const getProducts = async (req, res) => {
  try {
    const getProducts = await productServices.getAllProducts();
    return res.status(200).json(getProducts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = await productServices.createProduct(req.body);
    return res
      .status(201)
      .json({ message: "Successfully created product", newProduct });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  createProduct,
};
