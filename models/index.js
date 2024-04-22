const sequelize = require('sequelize');
const User = require('./user');
const GeneralData = require('./GeneralData');
const Records = require('./Records');
const Routine = require('./Routine');
const Level = require('./Level');
const Beginner = require('./beginner');
const IntAdvObj = require('./IntAdvObj');

Routine.hasMany(Level, { 
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
  Level.belongsTo(Routine, {
    foreignKey: 'user_id',
  });
  
  User.hasOne(Routine, {
    foreignKey: 'user_id',
    
  });
  Routine.belongsTo(User, {
    foreignKey: 'user_id',
  });
  User.hasMany(Records, {
    foreignKey: 'user_id',
  });
  Records.belongsTo(User, {
    foreignKey: 'user_id',
  });
  
  User.hasOne(GeneralData, {
    foreignKey: 'user_id',
  });
  
  GeneralData.belongsTo(User, {
    foreignKey: 'user_id',
  });
  
 
  Beginner.belongsTo(Routine, {
    foreignKey: 'user_id', 
  });
  
 IntAdvObj.belongsTo(Routine, { 
    foreignKey: 'user_id', 
  });
  
  module.exports = {sequelize, User, GeneralData, Records, Routine, Level, Beginner, IntAdvObj};

