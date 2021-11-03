module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Groups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      gameId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Games',
          key: 'id',
        },
      },
      modeId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Modes',
          key: 'id',
        },
      },
      positionId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Positions',
          key: 'id',
        },
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('Groups');
  },
};
