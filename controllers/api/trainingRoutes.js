const express = require('express');
const router = express.Router();
const sequelize = require('../../config/connection');
const { User, } = require('../../models');
//middleware
async function generateTrainingSchedule(userInput) {
    try {
        const chatGptResponse = await fetch('/trainning', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInput),
        });
        if (!chatGptResponse.ok) {
            throw new Error('Failed to fetch response from ChatGPT ');
        }
        const schedule = await chatGptResponse.json();
        return schedule;
    } catch (error) {
        console.error('Error generating training schedule:', error);
        throw error;
    }
}
router.get('/generate_schedule', async (req, res) => {
    try {
        const userInput = req.query; // this has to match db/useri
        // Calling function
        const schedule = await generateTrainingSchedule(userInput);
        res.json(trainning); // Send generated schedule as response
    } catch (error) {
        console.error('Error generating training schedule:', error);
        res.status(500).json({ error: 'Failed to generate training schedule' });
    }
});
// Define training routes
router.post('/', (req, res) => {
  //
  res.send('Start training');
});
// Export the router
module.exports = router;










