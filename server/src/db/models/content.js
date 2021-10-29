const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Content extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { through: 'Chats', foreignKey: 'fromUserId' });
    }
  }
  Content.init(
    {
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Content',
    }
  );
  return Content;
};
