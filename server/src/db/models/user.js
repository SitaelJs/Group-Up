const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Service, Role, Chat, ChatGroup, Group, Characteristic, ChatGlobal }) {
      this.belongsToMany(Service, { through: 'UserServices', foreignKey: 'userId' });
      this.belongsToMany(Group, { through: 'UserGroups', foreignKey: 'userId' });
      this.hasMany(Chat, { foreignKey: 'userId' });
      this.hasMany(ChatGroup, { foreignKey: 'userId' });
      this.hasMany(ChatGlobal, { foreignKey: 'userId' });
      this.hasMany(Characteristic, { foreignKey: 'userId' });
      this.belongsTo(Role, { foreignKey: 'roleId' });
    }
  }
  User.init(
    {
      nickname: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.TEXT, allowNull: false },
      roleId: { type: DataTypes.INTEGER, allowNull: false },
      searchStatus: { type: DataTypes.BOOLEAN, allowNull: false },
      info: DataTypes.TEXT,
      age: DataTypes.INTEGER,
      photo: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
