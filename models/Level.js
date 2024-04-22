const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { keyBy } = require('lodash');


class Level extends Model {}

Level.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    beginnerObj:{
        type: DataTypes.STRING,
        allowNull: false,
        reference:{
            model: 'beginnerObj',
            key: 'id',
            allowNull : true,
        },
        defaultValue: 'user@example.com',
    },
    intAdvObj:{
        type: DataTypes.STRING,
        allowNull: false,
        reference:{
            model: 'intAdvObj',
            key: 'id',
            allowNull : true,
        },
        defaultValue: 'user@example.com',
 },

},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'level',

}

);

module.exports = Level;