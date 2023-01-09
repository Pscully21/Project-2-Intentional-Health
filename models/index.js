// Require dependencies
const User = require('./user');
const Workout = require('./workout');
const Goal = require('./goal');

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
// Exporting the models for requiring from one file
module.exports = {
    User,
    Goal,
    Workout,
}