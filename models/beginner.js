const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');



class Beginner extends Model {}

Beginner.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    objective:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'beginnerObj',
});

module.exports = Beginner;