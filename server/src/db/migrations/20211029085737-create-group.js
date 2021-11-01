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
        allowNull: false,
        references: {
<<<<<<< HEAD
          model: 'Groups',
=======
          model: 'Games',
          key: 'id',
        },
      },
      modeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Modes',
          key: 'id',
        },
      },
      positionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Positions',
>>>>>>> 7d663b4c10d7269717885f0e57f48d4cea9e15eb
          key: 'id',
        },
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
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
    await queryInterface.dropTable('Groups');
  },
};
