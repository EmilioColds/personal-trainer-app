const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');



class intAdvObj extends Model {}

intAdvObj.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    Objective:{
        type: DataTypes.STRING,
        allowNull: false,
    },


    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'intAdvObj',
});

module.exports = intAdvObj;