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

const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await productServices.getProductById(id);

    return res.status(200).json({ product });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  try {
    const product = await productServices.updateProduct(body, id);

    return res
      .status(200)
      .json({ message: "Successfully updated product", product });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const destroyed = await productServices.deleteProduct(id);

    return res
      .status(200)
      .json({ message: "Successfully deleted product", destroyed });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const loadProducts = async (req, res) => {
  try {
    const products = await productServices.loadProducts();

    return res
      .status(200)
      .json({ message: "Successfully loaded products", products });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const deleteAllProducts = async (req, res) => {
  try {
    const destroyed = await productServices.deleteAllProducts();

    return res
      .status(200)
      .json({ message: "Successfully deleted product", destroyed });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
  loadProducts,
  deleteAllProducts,
};
