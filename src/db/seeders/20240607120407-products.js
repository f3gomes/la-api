"use strict";

const generateRandomProduct = (number) => {
  const name = `Moto G ${number}`;
  const brand = "Motorola";
  const price = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
  const stock = 10;
  const urlImage = "https://i.zst.com.br/thumbs/12/f/19/-797867416.jpg";
  const createdAt = new Date();
  const updatedAt = new Date();
  const deletedAt = new Date();

  return {
    name,
    brand,
    price,
    stock,
    urlImage,
    createdAt,
    updatedAt,
    deletedAt,
  };
};

const products = [];

for (let i = 1; i < 51; i++) {
  products.push(generateRandomProduct(i));
}

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("products", products);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
