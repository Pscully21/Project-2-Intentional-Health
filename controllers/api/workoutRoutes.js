const router = require('express').Router();
const { Workout } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const workoutData = await Workout.findAll(req.body);

    res.status(200).json(workoutData);
  } catch (err) { 
    res.status(400).json(err)
  }
});


router.post('/', async (req, res) => {
    try {
        const workoutData = await Workout.create(req.body);
        res.status(200).json(workoutData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const workoutData = await Workout.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

    if(!workoutData) {
        res.status(404).json({ message: 'No Workout found with that id!' });
        return;
    }

    res.status(200).json('Workout deleted successfully');
    } catch (err) {
      res.status(500).json(err);  
    }
});

module.exports = router;