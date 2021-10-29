const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ContentGlobal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { through: 'ChatGlobals', foreignKey: 'fromUserId' });
    }
  }
  ContentGlobal.init(
    {
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'ContentGlobal',
    }
  );
  return ContentGlobal;
};
