const { Product } = require("../db/models");

const getAllProducts = async () => {
  const products = await Product.findAll({ order: ["id"] });

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

const updateProduct = async (body, id) => {
  const result = await Product.update(body, { where: { id: Number(id) } });

  return result;
};

const deleteProduct = async (id) => {
  const destroyed = await Product.destroy({
    where: { id },
  });

  if (!destroyed) throw new Error("Product not found");

  return destroyed;
};

const deleteAllProducts = async () => {
  const destroyed = await Product.destroy({ where: {} });

  return destroyed;
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  deleteAllProducts,
};
