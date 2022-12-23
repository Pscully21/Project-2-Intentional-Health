// Require dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Adds a class model for Workout category
class Workout_category extends Model {}

// Initializes the table how each column will function
Workout_category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'workout_category',
      }
)
module.exports = {Workout_category}