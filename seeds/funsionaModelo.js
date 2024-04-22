const sequelize = require('../config/connection');
const { GeneralData } = require('../models');
console.log(GeneralData)
const generalData = [
 {
    name: 'John Doe',
    age: 30,
    hight: 180,
    gender: 'Male',
    weight: 75,
    injury: false,
    meds: false,
    nutrition: true,
    trainingLocation: 'Gym',
    trainingDays: 3,
    trainingDuration: '1:00',
    targetDeadline: 6,
    level: 'Beginner',
  },
  {
    name: 'Jane Doe',
    age: 25,
    hight: 170,
    gender: 'Female',
    weight: 60,
    injury: false,
    meds: false,
    nutrition: true,
    trainingLocation: 'Home',
    trainingDays: 2,
    trainingDuration: '0:45',
    targetDeadline: 8,
    level: 'Intermediate',
  },
];
const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await GeneralData.bulkCreate(generalData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};
seedDatabase()


const  GeneralData  = require('../../models/GeneralData');

/* POST //signup - Handle user signup
are we going to use email tho?
router.get("/users", async (req, res) => {
  try {
    const [generalData] = await GeneralData.findAll();
    res.json(generalData);
  } catch (error) {
    console.log(error);
  }
});
*/