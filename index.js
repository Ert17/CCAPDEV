
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

// app.use(session({
//   secret: 'CCAPDEV',
//   resave: false,
//   saveUninitialized: false,
//   store: new MongoStore({mongooseConnection: mongoose.connection})
// }));

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
});

app.set('view engine', 'hbs');

app.use(express.static('public'));

app.use('/', routes);

// app.use((req, res, next) => {
//     if (req.cookies.userData && !req.session.username) {
//         res.clearCookie('userData');        
//     }
//     next();
// });

// app.use(function (req, res) {

//     var details = {};

//     /*
//         checks if a user is logged-in by checking the session data
//         if a user is logged-in,
//         display the profile tab and logout tab in the nav bar.
//     */
//     if(req.session.username) {
//         details.flag = true;
//         details.username = req.session.username;
//     }

//     /*
//         if no user is logged-in,
//         do not display the profile tab and the logout tab in the nav bar.
//     */
//     else
//         details.flag = false;

//     // render `../views/error.hbs`
//     res.render('home', details);
// });

db.connect();

app.listen(port, function () {
  console.log('App listening at port ' + port);
});

