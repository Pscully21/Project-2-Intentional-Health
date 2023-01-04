// Require dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Adds a class model for Workout
class Workout extends Model {} 

// Initializes the table how each column will function
Workout.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull:false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        title: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        body: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        workout_category_id: {
            type: DataTypes.INTEGER,
            allowNull:false,
            references: {
                model: 'workout_category',
                key: 'id'
            }
        },
        unit: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        public_status: {
            type: DataTypes.BOOLEAN,
            allowNull:false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'workout',
      }
)

module.exports = {Workout}