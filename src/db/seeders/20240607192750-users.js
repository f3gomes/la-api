"use strict";

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("users", [
      {
        email: "test@mail.com",
        password: "abcd1234",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
