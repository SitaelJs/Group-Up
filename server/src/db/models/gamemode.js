const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class GameMode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GameMode.init(
    {
      modeId: DataTypes.INTEGER,
      gameId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'GameMode',
    }
  );
  return GameMode;
};
