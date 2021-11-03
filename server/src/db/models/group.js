const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Group extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({User, Game, ChatGroup, Mode, Position}) {
            this.belongsToMany(User, {through: 'UserGroups', foreignKey: 'groupId'});
            this.belongsTo(Game, {foreignKey: 'gameId'});
            this.belongsTo(Mode, {foreignKey: 'modeId'});
            this.belongsTo(Position, {foreignKey: 'positionId'});
            this.hasMany(ChatGroup, {foreignKey: 'groupId'});
        }
    }

    Group.init(
        {
            name: DataTypes.STRING,
            gameId: {type: DataTypes.INTEGER, allowNull: true},
            positionId: {type: DataTypes.INTEGER, allowNull: true},
            modeId: {type: DataTypes.INTEGER, allowNull: true},
            userId: {type: DataTypes.INTEGER, allowNull: true},
        },
        {
            sequelize,
            modelName: 'Group',
        }
    );
    return Group;
};
