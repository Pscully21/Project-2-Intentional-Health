// Require dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const bcrypt = require('bcrypt');

// Adds a class model for User
class User extends Model {}

// Initializes the table how each column will function
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: { 
              isEmail: true,
            },
        },
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 13);
                return newUserData;
            },
        },
        sequelize,
        timestamps: true,
        createdAt: true,
        updatedAt:false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
)

module.exports = User;