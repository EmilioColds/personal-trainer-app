const router = require('express').Router();
const userRoutes = require('./userRoutes');
const trainingRoutes = require('./trainningroutes');

router.use('/users', userRoutes);
router.use("/training", trainingRoutes);

module.exports = router;