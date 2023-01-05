const sequelize = require('../config/connection');
const { User, Goal, Workout } = require('../models');

const userSeedData = require('./userSeedData.json');
const goalSeedData = require('./goalSeedData.json');
const workoutSeedData = require('./workoutSeedData.json');

const seedDb = async () => {
  await sequelize.sync({ force: true });
  const users = User.bulkCreate(userSeedData);

  for(const { id } of users) {
    const newGoal 
  } 




seedDb();