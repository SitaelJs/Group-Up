const faker = require('faker');

const getRandomGame = (min, max) => Math.floor(Math.random() * (max - min) + min);

let test = -4;
const userId = () => {
  test += 5;
  return test;
};

const group = [...Array(20)].map((user, index) => ({
  name: faker.internet.mac(),
  gameId: getRandomGame(1, 4),
  userId: userId(),
  createdAt: new Date(),
  updatedAt: new Date(),
}));

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Groups', group, {}),

  down: async (queryInterface, Sequelize) => {},
};
