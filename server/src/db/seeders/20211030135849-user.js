const faker = require('faker');

const getRandomRole = (min, max) => Math.floor(Math.random() * (max - min) + min);

const getRandomSearchStatus = (min, max) => {
  const num = Math.floor(Math.random() * (max - min) + min);
  if (num === 1) {
    return true;
  }
  return false;
};

const getRandomAge = (min, max) => Math.floor(Math.random() * (max - min) + min);

const users = [...Array(1000)].map((user) => ({
  nickname: faker.internet.userName(),
  email: faker.internet.email(),
  password: faker.internet.password(8),
  roleId: getRandomRole(1, 3),
  searchStatus: getRandomSearchStatus(1, 3),
  info: faker.animal.dog(),
  age: getRandomAge(14, 90),
  photo: faker.image.imageUrl(),
  createdAt: new Date(),
  updatedAt: new Date(),
}));
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', users, {}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
