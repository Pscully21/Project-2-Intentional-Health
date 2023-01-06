const router = require('express').Router();
const { Goal } = require('../../models');
//const authCheck = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
         const goalData = await Goal.create({
             ...req.body,
             user_id: req.session.user_id,
         });

         res.status(200).json(goalData);
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