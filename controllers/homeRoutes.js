const router = require('express').Router();
const { User, Goal, Workout } = require('../models');
const authCheck = require('../utils/auth');



router.get('/', async (req, res) => {
  try {

    const totalGoals = await Goal.findAll({where: {user_id: req.session.user_id}});
    const totalWorkouts = await Workout.findAll({where: {user_id: req.session.user_id}});

    res.render('homepage', {
      totalGoals,
      totalWorkouts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try {
    if(req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }

  res.render('login');
});



// router.get('/main', async (req, res) => {
//   try {

//     res.render('main', {
//      //goals,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/goals', authCheck, async (req, res) => {
  try {
    const goalData = await Goal.findAll({ where: {user_id: req.session.user_id}});
    
    const goals = goalData.map((goal) => goal.get({ plain: true }));
    
    res.render('goals', {
      goals,
      logged_in: req.session.logged_in
    });
    console.log(goalData)
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/workouts', authCheck, async (req, res) => {
  try {
      const workoutData = await Workout.findAll({ where: {user_id: req.session.user_id}});
    
      const workouts = workoutData.map((goal) => goal.get({ plain: true }));
    res.render('workouts', {
      workouts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



//add middleware here 



module.exports = router;