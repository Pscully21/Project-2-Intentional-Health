const sequelize = require('../config/connection');
const { User, Goal, Workout } = require('../models');

const userSeedData = require('./userSeedData.json');
const goalSeedData = require('./goalSeedData.json');
const workoutSeedData = require('./workoutSeedData.json');

const seedDb = async () => {
  await sequelize.sync({ force: true });
  const users = User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true, 
  });

  for(const goal of goalSeedData) {
    await Goal.create({
      ...goal,
      user_id: users[Math.floor(Math.random()*
      users.length)].id,
    });
  } 

  for(const workout of workoutSeedData) {
    await Workout.create({
      ...workout,
      user_id: users[Math.floor(Math.random()*
      users.length)].id,
    });
  } 

  process.exit(0);
};

seedDb();