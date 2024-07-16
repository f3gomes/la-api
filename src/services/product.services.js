const { Op } = require("sequelize");
const { Product } = require("../db/models");

const getAllProducts = async () => {
  const products = await Product.findAll({
    where: { deletedAt: { [Op.is]: null } },
    order: [["id", "ASC"]],
  });

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

const getProductById = async (id) => {
  const product = await Product.findAll({ where: { id: Number(id) } });

  return product;
};

const updateProduct = async (body, id) => {
  const product = await Product.update(body, { where: { id: Number(id) } });

  return product;
};

const loadProducts = async () => {
  const products = await Product.update({ deletedAt: null }, { where: {} });

  return products;
};

const deleteProduct = async (id) => {
  const destroyed = await Product.update(
    { deletedAt: new Date() },
    {
      where: { id },
    }
  );

  if (!destroyed) throw new Error("Product not found");

  return destroyed;
};

const deleteAllProducts = async () => {
  const destroyed = await Product.update(
    { deletedAt: new Date() },
    { where: {} }
  );

  return destroyed;
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  loadProducts,
  deleteAllProducts,
};
