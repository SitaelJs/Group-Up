module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Modes', [
      {
        name: '2X2',
        countPlayer: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '5X5',
        countPlayer: '5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ranked All Pick',
        countPlayer: '5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'All Pick',
        countPlayer: '5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Random Draft',
        countPlayer: '5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Quick game',
        countPlayer: '6',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Arcade',
        countPlayer: '6',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Competitive',
        countPlayer: '6',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {},
};
