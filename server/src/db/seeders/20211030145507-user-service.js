const faker = require('faker');

const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

const users = [...Array(1000)].map((el, index) => ({
  serviceId: getRandom(1, 4),
  userId: getRandom(index),
  clientID: faker.internet.mac(),
  createdAt: new Date(),
  updatedAt: new Date(),
}));

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('UserServices', users, {}),

  down: async (queryInterface, Sequelize) => {},
};
