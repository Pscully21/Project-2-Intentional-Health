const path = require('path');
const express = require('express');
const session = require('express-session');
const handlebars = require('express-handlebars');
const routes = require('./controllers');
//const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

//const hbs = handlebars.create({ helpers });
//sets up session
 const sess = {
     secret: 'Super secret secret',
     cookie: {
         maxAge: 60 * 60 * 1000,
         httpOnly: true,
         secure: false,
         sameSite: 'strict',
     },
     resave: false,
     saveUninitialized: false,
     store: new SequelizeStore({
         db: sequelize
     })
   };

  app.use(session(sess));

  app.engine('handlebars', handlebars.engine);

  app.set('view engine', 'handlebars');

  app.use(express.json()); // allows files to return like a json
  app.use(express.urlencoded({ extended: true })); // allows us to use urlcoded 
  app.use(express.static(path.join(__dirname, 'public'))); // middleware 

  app.use(routes);


  sequelize.sync({ force: false }).then(() => { 
    app.listen(PORT, () => console.log(`Now Listening on ${PORT}`))
  });
