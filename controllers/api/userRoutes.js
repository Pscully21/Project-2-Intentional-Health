const router = require('express').Router();
const { User, Goal, Workout } = require('../../models');
const bcrypt = require('bcrypt')

router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll(req.body);

    res.status(200).json(userData);
  } catch (err) { 
    res.status(400).json(err)
  }
});

router.get('/:id', async (req, res) => { 
  try {
    const userData = await User.findByPk(req.params.id);

    if(!userData) {
      res.status(404).json({ message: 'No User found with that id.'});
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
      const userData = await User.destroy({
        where: { 
          id: req.params.id,
        },
      });
      if(!userData) {
        res.status(404).json({ message : 'User not found with that id.' });
        return;
      }
      res.status(200).json("User Deleted Successfully");
  } catch (err) {
      res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await bcrypt.compare(req.body.password, userData.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.status(200).json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (error) {
      res.status(400).json(error);
    }
  });
  
  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  
  module.exports = router;
  