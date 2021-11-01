const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Mode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Game, Group }) {
      this.belongsToMany(Game, { through: 'GameModes', foreignKey: 'modeId' });
      this.hasMany(Group, { foreignKey: 'modeId' });
    }
  }

  Mode.init(
    {
      name: DataTypes.STRING,
      countPlayer: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Mode',
    }
  );
  return Mode;
};
