const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class GamePosition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GamePosition.init(
    {
      positionId: DataTypes.INTEGER,
      gameId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'GamePosition',
    }
  );
  return GamePosition;
};
