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
    routineId: { // Foreign key referencing Routine model
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'routine', // Reference the Routine model
          key: 'id', // Reference the primary key of Routine
        },
    },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'beginnerObj',
});

module.exports = Beginner;