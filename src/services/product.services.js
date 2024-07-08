const { Product } = require("../db/models");

const getAllProducts = async () => {
  const products = await Product.findAll();

  return products;
};

const createProduct = async (productData) => {
  try {
    const { name, brand, urlImage, price, stock } = productData;

    const newProduct = await Product.create({
      name,
      brand,
      urlImage,
      price,
      stock,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return newProduct;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getAllProducts,
  createProduct,
};
