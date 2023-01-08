const sequelize = require('../config/connection');
const { User, Goal, Workout } = require('../models');

const userSeedData = require('./userSeedData.json');
const goalsSeedData = require('./goalsSeedData.json');
const workoutSeedData = require('./workoutSeedData.json');
const categorySeedData = require('./categorySeedData.json');
const topicSeedData = require('./topicSeedData.json');

const seedDb = async () => {
  await sequelize.sync({ force: true });
  const users = User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true, 
  });
  const categories = category.bulkCreate(categorySeedData, {
    individualHooks: true,
    returning: true,
  });
  const goals = goal.bulkCreate(goalsSeedData, {
    individualHooks: true,
    returning: true,
  });
  const topics = topic.bulkCreate(topicSeedData, {
    individualHooks: true,
    returning: true,
  });
  const workouts = workout.bulkCreate(workoutSeedData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDb();