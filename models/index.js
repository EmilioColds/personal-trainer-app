const User = require('./user');
const GeneralData = require('./GeneralData')
const Records = require('./Records')
const Routine = require('./Routine')
const level = require('./Level')
const Beginner = require('./beginner');
const intAdvObj = require('./adv-int');


// objetivo principientes = beginnerObj
// inermedio/avancado = intAdvObj

Routine.hasMany(level, { // Change to hasMany for many levels per routine
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
  level.belongsTo(Routine, {
    foreignKey: 'user_id',
  });
  
  User.hasOne(Routine, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
  Routine.belongsTo(User, {
    foreignKey: 'user_id',
  });
  User.hasMany(Records, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
  Records.belongsTo(User, {
    foreignKey: 'user_id',
  });
  
  User.hasOne(GeneralData, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
  
  GeneralData.belongsTo(User, {
    foreignKey: 'user_id',
  });
  
  // Beginner and intAdvObj are separate models (assuming)
  Beginner.belongsTo(Routine, {
    foreignKey: 'user_id', // Removed through: level
  });
  
 intAdvObj.belongsTo(Routine, { 
    foreignKey: 'user_id', // Removed through: level
  });
  
  module.exports = {
    User,
    GeneralData,
    Records,
    Routine,
    level,
    Beginner,
    intAdvObj, 
  };

module.exports = {User, GeneralData, Records, Routine, level, Beginner, intAdvObj};