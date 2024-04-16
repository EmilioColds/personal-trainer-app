const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { keyBy } = require('lodash');


class level extends Model {}

level.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    biginner_objective:{
        type: DataTypes.STRING,
        allowNull: false,
        reference:{
            model: 'beginner',
            key: 'id',
            allowNull : true,
        }
    },
    adv_int_objective:{
        type: DataTypes.STRING,
        allowNull: false,
        reference:{
            model: 'intAdvObj',
            key: 'id',
            allowNull : true,
        },
 },


    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'level',
});

module.exports = level;