const router = require('express').Router();
const goalRoutes = require('./goalRoutes');
const userRoutes = require('./userRoutes');
const workoutRoutes = require('./workoutRoutes');

router.use('/goals', goalRoutes);
//router.use('/logins', loginRoutes);
router.use('/users', userRoutes);
router.use('/workouts', workoutRoutes);

module.exports = router;

