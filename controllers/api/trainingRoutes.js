const express = require("express");
require("dotenv").config();
const router = express.Router();
const sequelize = require('../../config/connection');
const { User } = require('../../models');
const { Configuration, OpenAIApi } = require("openai");
const app = express();
app.use(express.json());
const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});
const openai = new OpenAIApi(configuration);
const { GeneralData, Routine } = require('../models'); // Import your models
const axios = require('axios');

// Route to send GeneralData to ChatGPT and save response to Routine
router.post('/routine', async (req, res) => {
  try {
    // Extract necessary data from the request body (assuming it contains GeneralData fields)
    const { name, age, height, gender, weight, injury, meds, nutrition, trainingLocation, trainingDays, trainingDuration, targetDeadline, level } = req.body;

    // Prepare data object to send to ChatGPT API
    const inputData = {
      name,
      age,
      height,
      gender,
      weight,
      injury,
      meds,
      nutrition,
      trainingLocation,
      trainingDays,
      trainingDuration,
      targetDeadline,
      level
    };

    // Call ChatGPT API endpoint
    const response = await axios.post('/routine:id', inputData);

    // Extract the routine from the ChatGPT response
    const { routine } = response.data;

    // Save the routine to the Routine model
    const newRoutine = await Routine.create({ routine });

    res.json(newRoutine); // Respond with the newly created Routine entry
  } catch (error) {
    console.error('Error processing chat request:', error);
    res.status(500).json({ error: 'Failed to process chat request' });
  }
});

module.exports = router;











