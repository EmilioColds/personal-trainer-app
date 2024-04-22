const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../../models/user'); // Import User model from Sequelize. Hay que checar que esto mat
const  GeneralData  = require('../../models/GeneralData');
const Routine = require('../../models/Routine');
const Beginner = require('../../models/beginner');
const  IntAdvObj = require ('../../models/IntAdvObj');
const Level = require('../../models/Level');
const Records = require('../../models/Records');
// POST //signup - Handle user signup
//are we going to use email tho?
router.get("/users", async (req, res) => {
  try {
    const [beginner] = await Beginner.findAll();
    res.json(beginner);
  } catch (error) {
    console.log(error);
  }
});



router.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).send('user already exists');
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 5);

        // Create a new user record in the database
        const newUser = await User.create({ username, password: hashedPassword });
        res.status(201).send('User registered successfully');
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send('Error registering user');
    }
});

////log in

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the user by user in the database
        const user = await User.findOne({ where: { username } });

        // If user not found or password doesn't match, return error
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).send('Invalid email or password');
        }

        // Authentication successful, set session and redirect
        req.session.userId = user.id; // Store user ID in session 
        res.redirect('/routine'); // Redirect to routine page upon successful login
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).send('Internal server error');
    }
});



module.exports = router;
