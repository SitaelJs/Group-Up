const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Mode, Position, Group }) {
      this.belongsToMany(Mode, { through: 'GameModes', foreignKey: 'gameId' });
      this.belongsToMany(Position, { through: 'GamePositions', foreignKey: 'gameId' });
      this.hasMany(Group, { foreignKey: 'gameId' });
    }
  }
  Game.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: 'Game',
    }
  );
  return Game;
};
