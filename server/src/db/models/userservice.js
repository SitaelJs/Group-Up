const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserService extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserService.init(
    {
      serviceId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      clientID: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'UserService',
    }
  );
  return UserService;
};
