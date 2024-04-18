const { User, GeneralData, Routine, Beginner, intAdvObj, level, Records } = require('../models'); // Replace './models' with your models path

const users = [
  {
    username: 'johndoe',
    email: 'johndoe@example.com',
    password: 'password123', // This will be hashed before saving
  },
  {
    username: 'janedoe',
    email: 'janedoe@example.com',
    password: 'secretpassword', // This will be hashed before saving
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
    TrainingDays: 3,
    trainingDuration: '1:00', // Adjust data type if needed (STRING vs. INTEGER/FLOAT)
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
    TrainingDays: 2,
    trainingDuration: '0:45', // Adjust data type if needed (STRING vs. INTEGER/FLOAT)
    targetDeadline: 8,
    level: 'Intermediate',
  },
];

const routines = [
  {
    routine: 'Morning Workout Routine',
    user_id: 1, // Reference user by ID
  },
  {
    routine: 'Evening Yoga Routine',
    user_id: 2, // Reference user by ID
  },
];

const beginnerLevels = [
  {
    objective: 'Perform 10 push-ups, 15 squats, and 30 crunches daily.',
    routineId: 1, // Reference routine by ID
  },
];

const intermediateAdvLevels = [
  {
    Objective: 'Complete a 30-minute HIIT workout 3 times a week.', // Notice capital 'O'
    routineId: 2, // Reference routine by ID
  },
];

const levels = [
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
    recordCien: 12.5, // Adjust data type if needed (FLOAT vs. STRING)
    recordCuatro: 18.2, // Adjust data type if needed (FLOAT vs. STRING)
    kmPace: '5:30', // Adjust data type if needed (STRING vs. INTEGER/FLOAT)
    user_id: 1, // Reference user by ID
  },
  {
    recordCien: 11.8, // Adjust data type if needed (FLOAT vs. STRING)
    recordCuatro: 17.1, // Adjust data type if needed (FLOAT vs. STRING)
    kmPace: '4:45', // Adjust data type if needed (STRING vs. INTEGER/FLOAT)
    user_id: 2, // Reference user by ID
  },
];

const seedDatabase = async () => {
  await GeneralData.bulkCreate(generalData, { validate: true });
  await User.bulkCreate(users, { validate: true });
  await Routine.bulkCreate(routines);
  await Beginner.bulkCreate(beginnerLevels);
  await intAdvObj.bulkCreate(intermediateAdvLevels);
  await level.bulkCreate(levels);
  await Records.bulkCreate(records);
  console.log('Database seeded!');
};

seedDatabase();

module.exports = seedDatabase;
