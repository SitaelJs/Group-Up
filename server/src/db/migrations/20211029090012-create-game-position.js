module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('GamePositions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      positionId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Positions',
          key: 'id',
        },
      },
      gameId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Games',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('GamePositions');
  },
};
