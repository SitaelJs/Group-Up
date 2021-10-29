const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Service,
      Role,
      Content,
      ContentGroup,
      Group,
      Characteristic,
      ContentGlobal,
    }) {
      this.belongsToMany(Service, { through: 'UserServices', foreignKey: 'userId' });
      this.belongsToMany(Group, { through: 'UserGroups', foreignKey: 'userId' });
      this.hasMany(Content, { through: 'Chats', foreignKey: 'fromUserId' });
      this.hasMany(ContentGroup, { through: 'ChatGroups', foreignKey: 'fromUserId' });
      this.hasMany(ContentGlobal, { through: 'ChatGlobal', foreignKey: 'fromUserId' });
      this.hasMany(Characteristic, { foreignKey: 'userId' });
      this.hasOne(Role, { through: 'UserRoles', foreignKey: 'userId' });
    }
  }
  User.init(
    {
      nickname: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.TEXT, allowNull: false },
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