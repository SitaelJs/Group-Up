module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('GameModes', [
      {
        modeId: 1,
        gameId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modeId: 2,
        gameId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modeId: 3,
        gameId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modeId: 4,
        gameId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modeId: 5,
        gameId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modeId: 6,
        gameId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modeId: 7,
        gameId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modeId: 8,
        gameId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {},
};
