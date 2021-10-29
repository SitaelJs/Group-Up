const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ContentGroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Group }) {
      this.belongsTo(User, { through: 'ChatGroups', foreignKey: 'fromUserId' });
      this.belongsTo(Group, { through: 'ChatGroups', foreignKey: 'ContentGroupId' });
    }
  }
  ContentGroup.init(
    {
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'ContentGroup',
    }
  );
  return ContentGroup;
};
