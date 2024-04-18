const router = require('express').Router();
const userRoutes = require('./userRoutes');
const trainingRoutes = require('./trainningroutes');
router.use('/users', userRoutes);


 // Import correct module
router.use("/training", trainingRoutes); // Use correct module for training routes

module.exports = router;
