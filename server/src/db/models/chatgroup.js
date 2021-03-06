const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ChatGroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Group }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Group, { foreignKey: 'groupId' });
    }
  }
  ChatGroup.init(
    {
      groupId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'ChatGroup',
    }
  );
  return ChatGroup;
};
