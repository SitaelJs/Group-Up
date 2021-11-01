module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Roles', [
      {
        name: 'User',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Moderator',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {},
};
