const router = require('express').Router();
const { User, Workout_category, Goal } = require('../models');
//const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
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

    res.render('homepage', {
      goals,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/goal/:id', async (req, res) => {
  try {
    const goalData = await Goal.findByPk(req.params.id, {
      include: [
        {
          model:User,
          attributes: ['username'],
        },
      ],
    });

    const goal = goalData.get({ plain:true });

    res.render('goal', {
      ...goal,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//add middleware here 



module.exports = router;