// Require dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
 
// Adds a class model for Goal
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
        topic: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        start_date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        end_date: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'goal',
      }
)

module.exports = Goal;