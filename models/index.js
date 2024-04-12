const User = require('./user');
const GeneralData = require('./GeneralData')
const Records = require('./Records')
const Routine = require('./Routine')

// objetivo principientes = beginnerObj
// inermedio/avancado = intAdvObj
User.hasOne(Routine,{
    foreignKey:'user_id',
    onDelete: 'CASCADE',
});
Routine.belongsTo(User,{
    foreignKey:'user_id',
});
User.hasMany(Records,{
    foreignKey:'user_id',
    onDelete:'CASCADE',
});
Records.belongsTo(User,{
    foreignKey:'user_id'

});
User.hasOne(GeneralData,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

GeneralData.belongsTo( User,{
    foreignKey: 'user_id'
});


module.exports = {User, GeneralData, Records, Routine};