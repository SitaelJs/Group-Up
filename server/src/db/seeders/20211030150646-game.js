module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Games', [
      {
        title: 'CS:GO',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Dota2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Overwatch',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {},
};
