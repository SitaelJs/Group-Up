module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('GamePositions', [
      {
        positionId: 1,
        gameId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionId: 2,
        gameId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionId: 3,
        gameId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionId: 4,
        gameId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionId: 5,
        gameId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionId: 6,
        gameId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionId: 7,
        gameId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionId: 8,
        gameId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionId: 9,
        gameId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionId: 10,
        gameId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionId: 11,
        gameId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionId: 12,
        gameId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionId: 13,
        gameId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionId: 14,
        gameId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionId: 15,
        gameId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {},
};
