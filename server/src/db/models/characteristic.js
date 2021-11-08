const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Characteristic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Characteristic.init(
    {
      userId: DataTypes.INTEGER,
      toUserId: DataTypes.INTEGER,
      toxic: DataTypes.INTEGER,
      friendly: DataTypes.INTEGER,
      teamPlayer: DataTypes.INTEGER,
      leader: DataTypes.INTEGER,
      strategy: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Characteristic',
    }
  );
  return Characteristic;
};
