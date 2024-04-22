

const { User, GeneralData, Routine, Beginner, IntAdvObj, Level, Records } = require('../models'); // Replace './models' with your models path
const user = [
  {
    username: 'johndoe',
    email: 'johndoe@example.com',
    password: 'password123',
  },
  {
    username: 'janedoe',
    email: 'janedoe@example.com',
    password: 'secretpassword',
  },
];
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
const routine = [
  {
    routine: 'Morning Workout Routine',
    
  },
  {
    routine: 'Evening Yoga Routine',
    
  },
];
const beginnerObj = [
  {
    objective: 'Perform 10 push-ups, 15 squats, and 30 crunches daily.',
    
  },
];
const intAdvObj = [
  {
    Objective: 'Complete a 30-minute HIIT workout 3 times a week.',
    
  },
];
const level = [
  {
    beginnerObj: 'Focus on building core strength and endurance.',
  },
  {
    intAdvObj: 'Increase cardiovascular fitness and muscular strength.',
  },
];
const records = [
  {
    recordCien: 11.8,
    recordCuatro: 17.1,
    kmPace: '4:45',
  },
];
const seedDatabase = async() => {

  //GeneralData.bulkCreate(generalData, { validate: true });
  //User.bulkCreate(user, { validate: true });
  //Routine.bulkCreate(routine);
  //Beginner.bulkCreate(beginnerObj);
  //IntAdvObj.bulkCreate(intAdvObj);
  //Level.bulkCreate(level);
  await Records.bulkCreate(records);
  console.log('Database seeded!');
}


seedDatabase();
module.exports = seedDatabase;