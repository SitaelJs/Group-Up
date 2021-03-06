const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ChatGlobal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  ChatGlobal.init(
    {
      userId: DataTypes.INTEGER,
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'ChatGlobal',
    }
  );
  return ChatGlobal;
};
