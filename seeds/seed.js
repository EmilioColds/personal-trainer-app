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
    user_id: 1,
  },
  {
    routine: 'Evening Yoga Routine',
    user_id: 2,
  },
];
const beginnerObj = [
  {
    objective: 'Perform 10 push-ups, 15 squats, and 30 crunches daily.',
    routineId: 1, // Reference routine by ID
  },
];
const intAdvObj = [
  {
    Objective: 'Complete a 30-minute HIIT workout 3 times a week.',
    routineId: 2,
  },
];
const level = [
  {
    objective: 'Focus on building core strength and endurance.',
    difficulty: 'Beginner',
  },
  {
    objective: 'Increase cardiovascular fitness and muscular strength.',
    difficulty: 'Intermediate',
  },
];
const records = [
  {
    recordCien: 12.5,
    recordCuatro: 18.2,
    kmPace: '5:30',
    user_id: 1,
    recordCien: 11.8,
    recordCuatro: 17.1,
    kmPace: '4:45',
    user_id: 2,
  },
];
const seedDatabase = () => 
   //GeneralData.bulkCreate(generalData, { validate: true });
   //User.bulkCreate(user, { validate: true });
   //Routine.bulkCreate(routine);
   //Beginner.bulkCreate(beginnerObj);
   //IntAdvObj.bulkCreate(intAdvObj);
   //Level.bulkCreate(level);
   //Records.bulkCreate(records);
  console.log('Database seeded!');


seedDatabase();
module.exports = seedDatabase;








