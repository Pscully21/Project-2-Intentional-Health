const router = require('express').Router();
const { Workout_category } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newWorkoutCategory = await Workout_category.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newWorkoutCategory);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const workCateData = await Workout_category.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

    if(!workCateData) {
        res.status(404).json({ message: 'No Category found with that id!' });
        return;
    }

    res.status(200).json(workCateData);
    } catch (err) {
      res.status(500).json(err);  
    }
});

module.exports = router;