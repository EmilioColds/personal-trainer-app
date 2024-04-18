const express = require('express');
const router = express.Router();

// Import other routers


// Homepage route
router.get('/', (req, res) => {
    res.render('homepage', { layout: 'main' });
});

// Login page route
router.get('/login', (req, res) => {
    res.render('login', { views: 'login' });
});

// Signup page route
router.get('/signup', (req, res) => {
    res.render('signup', { views: 'signup' });
});

// Questionnaire page route
router.get('/questionnaire', (req, res) => {
    res.render('questionnaire', { views: 'questionnaire' });
});


module.exports = router;
