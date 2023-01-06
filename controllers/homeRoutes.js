const router = require('express').Router();
const { User, Goal, Workout } = require('../models');
//const withAuth = require('../utils/auth');



router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      //logged_in: req.session.logged_in
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

router.get('/goals', async (req, res) => {
  try {
    const goalData = await Goal.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
    });
    
    const goals = goalData.map((goal) => goal.get({ plain: true }));

    res.render('goals', {
      goals,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/workouts', async (req, res) => {
  try {
      const workoutData = await Workout.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      });
    
      const workouts = workoutData.map((goal) => goal.get({ plain: true }));
    res.render('workouts', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



//add middleware here 



module.exports = router;