// Require dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Adds a class model for Goal topic
class Goal_topic extends Model {}

// Initializes the table how each column will function
Goal_topic.init(
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
        modelName: 'goal_topic',
      }
)

module.exports= Goal_topic;