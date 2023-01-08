// Required dependencies
const Sequelize = require('sequelize');
require('dotenv').config();

// This sets an empty variable to be determined by the following if statement
let sequelize;

// If its uploaded to Heroku the process.env.JAWSDB_URL will be true and will set the SQL DB to the one hosted on Heroku
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
  // Else it will look for the database using the other parameters
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      //host:'localhost',
      host: '127.0.0.1',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;