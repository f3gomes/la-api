"use strict";
const md5 = require("md5");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("users", [
      {
        email: "test@mail.com",
        password: md5("abcd1234"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
