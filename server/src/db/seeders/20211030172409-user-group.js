let userCounter = 0;
let counter = 0;
let groupCounter = 1;
const userId = () => {
  if (counter !== 5) {
    userCounter += 1;
    counter += 1;
    return userCounter;
  }
  userCounter += 1;
  counter = 0;
  groupCounter += 1;
  return userCounter;
};

const userGroup = [...Array(1000)].map((user, index) => ({
  userId: userId(),
  groupId: groupCounter,
  createdAt: new Date(),
  updatedAt: new Date(),
}));

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Groups', userGroup, {}),

  down: async (queryInterface, Sequelize) => {},
};
