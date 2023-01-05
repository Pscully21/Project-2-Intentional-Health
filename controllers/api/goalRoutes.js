const router = require('express').Router();
const Goal = require('../../models');
//const withAuth = require('../../utils/auth');

router.get('/goalAll', async (req, res) => {
  try {
       const newGoal = await Goal.findAll({
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
       res.status(200).json(newGoal);
  } catch (err) {
      res.status(400).json(err);
  }
});

router.post('/post', async (req, res) => {
    try {
         const newGoal = await Goal.create({
             ...req.body,
             user_id: req.session.user_id,
         });

         res.status(200).json(newGoal);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res)=> {
    try {
        const goalData = await Goal.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if(!goalData) {
            res.status(404).json({ message : 'Goal not found with that id.' });
            return;
        }

        res.status(200).json(goalData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;