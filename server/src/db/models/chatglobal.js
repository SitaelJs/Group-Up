const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ChatGlobal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ChatGlobal.init(
    {
      fromUserId: DataTypes.INTEGER,
      contentGlobalId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'ChatGlobal',
    }
  );
  return ChatGlobal;
};
