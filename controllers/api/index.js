const router = require('express').Router();
//const calendarRoutes = require('./calendarRoutes');
const goalRoutes = require('./goalRoutes');
//const loginRoutes = require('./loginRoutes');
const userRoutes = require('./userRoutes');
const workoutRoutes = require('./workoutRoutes');

//router.use('/calendars', calendarRoutes);
router.use('/goals', goalRoutes);
//router.use('/logins', loginRoutes);
router.use('/users', userRoutes);
router.use('/workouts', workoutRoutes);

module.exports = router;

