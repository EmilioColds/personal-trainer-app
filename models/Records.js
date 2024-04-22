const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { User } = require('./user');



class Records extends Model {}

Records.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        recordCien:{
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        recordCuatro:{
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        kmPace:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        user_id:{
            type: DataTypes.INTEGER,
            references:{
                model: 'user',
                key: 'id',
            },
            },
          },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'records',

    }
    );
    
module.exports = Records;