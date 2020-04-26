
const express = require('express');

const exphbs = require('express-handlebars');

const session = require('express-session');

const cookieParser = require('cookie-parser');

const mongoose = require('mongoose');

const MongoStore = require('connect-mongo')(session);

const handlebars = require('handlebars');

const multer = require('multer');

const bodyParser = require('body-parser');

const routes = require('./routes/routes.js');

const path = require('path');

const db = require('./models/db.js');

const app = express();
const port = 3000;

app.engine( 'hbs', exphbs({
  extname: 'hbs', 
  defaultView: 'main', 
  layoutsDir: path.join(__dirname, '/views/layouts'), 
  partialsDir: path.join(__dirname, '/views/partials'),
  helpers: {
    cap: function(text) { return text.toUpperCase(); },
    em: function(text) {
      var x = `<em>${text}</em>`;
      
      return new handlebars.SafeString(x);
    },
    str: function(text) {
      return text.replace(/["']/g, "");
    }
  }
}));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(session({
  secret: 'CCAPDEV',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({mongooseConnection: mongoose.connection})
}));

app.set('view engine', 'hbs');

app.use(express.static('public'));

app.use('/', routes);

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
});

db.connect();

app.listen(port, function () {
  console.log('App listening at port ' + port);
});

