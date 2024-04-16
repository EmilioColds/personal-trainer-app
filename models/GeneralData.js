const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');



class GeneralData extends Model {}

GeneralData.init(
    {
     id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    hight: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    gender:{
        type: DataTypes.STRING,
        allowNull: false,
    },
     weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
     injury:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
     meds:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    nutrition:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    trainingLocation:{
        type: DataTypes.STRING,
        allowNull: false,

    },
    TrainingDays:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    trainingDuration:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    targetDeadline :{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    level:{
        type: DataTypes.STRING,
        allowNull: false,

    },
    
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'generalData',

});

module.exports = GeneralData;

