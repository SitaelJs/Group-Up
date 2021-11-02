module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Characteristics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      toUserId: {
        type: Sequelize.INTEGER,
      },
      toxic: {
        type: Sequelize.INTEGER,
      },
      friendly: {
        type: Sequelize.INTEGER,
      },
      teamPlayer: {
        type: Sequelize.INTEGER,
      },
      leader: {
        type: Sequelize.INTEGER,
      },
      strategy: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Characteristics');
  },
};
