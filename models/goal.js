// Require dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
 
// Adds a class model for Workout
class Goal extends Model {}

// Initializes the table how each column will function
Goal.init(
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
            allowNull: false,
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        topic_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'goal_topic',
                key: 'id'
            }
        },
        end_date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        reflection: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        public_status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        done_status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }

    },
    {
        sequelize,
        timestamps: true,
        createdAt: true,
        updatedAt: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'goal',
      }
)

module.exports = {Goal}