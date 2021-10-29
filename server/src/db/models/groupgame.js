const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class GroupGame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GroupGame.init(
    {
      groupId: DataTypes.INTEGER,
      gameId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'GroupGame',
    }
  );
  return GroupGame;
};
