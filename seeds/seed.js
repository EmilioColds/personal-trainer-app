


const sequelize = require('../config/connection');
const { Beginner} = require('../models');

const beginnerObj = [
  {
    objective: 'Perform 10 push-ups, 15 squats, and 30 crunches daily.',
   
  },
];
const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await Beginner.bulkCreate(beginnerObj, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};
seedDatabase()










