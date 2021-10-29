const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Game, ContentGroup }) {
      this.belongsToMany(User, { through: 'UserGroup', foreignKey: 'groupId' });
      this.belongsTo(Game, { through: 'GroupGames', foreignKey: 'groupId' });
      this.hasMany(ContentGroup, { through: 'ChatGroups', foreignKey: 'groupId' });
    }
  }
  Group.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Group',
    }
  );
  return Group;
};
