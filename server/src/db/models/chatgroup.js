const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ChatGroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ChatGroup.init(
    {
      toGroupId: DataTypes.INTEGER,
      fromUserId: DataTypes.INTEGER,
      contentGroupId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'ChatGroup',
    }
  );
  return ChatGroup;
};
