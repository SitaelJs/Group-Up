module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nickname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      searchStatus: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      info: {
        type: Sequelize.TEXT,
      },
      age: {
        type: Sequelize.INTEGER,
      },
      photo: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('Users');
  },
};
