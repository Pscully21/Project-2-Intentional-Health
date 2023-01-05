// Require dependencies
const User = require('./user');
const Workout = require('./workout');
const Goal = require('./goal');
const Workout_category = require('./workout_category');
const Goal_topic = require('./goal_topic');

// User has many goals
User.hasMany(Goal, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

// Goal belongs to user
Goal.belongsTo(User, {
    foreignKey: 'user_id',
})
// User has many workouts
User.hasMany(Workout, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

// Workout belongs to user
Workout.belongsTo(User, {
    foreignKey: 'user_id',
})

// Goal has one topic
Goal.hasOne(Goal_topic, {
    foreignKey: 'topic_id'
})

// Workout has one category
Workout.hasOne(Workout_category, {
    foreignKey: 'category_id'
})

// Exporting the models for requiring from one file
module.exports = {
    User,
    Goal,
    Goal_topic,
    Workout,
    Workout_category
}