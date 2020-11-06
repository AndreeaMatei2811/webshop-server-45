"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("products", [
      {
        name: "Skinny",
        imageUrl: "skinny jeans image",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Relaxed",
        imageUrl: "relaxed jeans image",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Regular",
        imageUrl: "regular jeans image",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Joggers",
        imageUrl: "pants image",
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cargo trousers",
        imageUrl: "other pants image",
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Chinos",
        imageUrl: "chinos pants image",
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Basic",
        imageUrl: "tshirt basic image",
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Print",
        imageUrl: "tshirt print image",
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Long sleeves",
        imageUrl: "tshirt long sleve image",
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Short sleeves",
        imageUrl: "tshirt short sleeve image",
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Denim jacket",
        imageUrl: "Denim jacket image",
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bomber jacket",
        imageUrl: "Bomber jacket image",
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Parka",
        imageUrl: "parka image",
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Trainers",
        imageUrl: "trainers image",
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sneakers",
        imageUrl: "sneakers image",
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Boots",
        imageUrl: "boots image",
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("products", null, {});
  },
};
