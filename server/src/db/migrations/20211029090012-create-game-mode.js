module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('GameModes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      modeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Modes',
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
    await queryInterface.dropTable('GameModes');
  },
};
