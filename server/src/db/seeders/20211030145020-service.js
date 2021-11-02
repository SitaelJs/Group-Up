module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Roles', [
      {
        name: 'Google',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Steam',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Origin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'EpicGames',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
