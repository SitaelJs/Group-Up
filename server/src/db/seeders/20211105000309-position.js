module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Positions', [
      {
        name: 'captain',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'tank',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'sniper',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'carry',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'support',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'nuker',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'disabler',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'jungler',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'durable',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'escape',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'pusher',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'initiator',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'tank',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'support',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'damage dealer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {},
};
