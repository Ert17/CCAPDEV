// All imports needed here
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars');

// Creates the express application
const app = express();
const port = 9090;

app.engine( 'hbs', exphbs({
  extname: 'hbs', // configures the extension name to be .hbs instead of .handlebars
  defaultView: 'main', // this is the default value but you may change it to whatever you'd like
  layoutsDir: path.join(__dirname, '/views/layouts'), // Layouts folder
  partialsDir: path.join(__dirname, '/views/partials'), // Partials folder
  // Additional helpers declared to reformat text prior to rendering
  helpers: {
    cap: function(text) { return text.toUpperCase(); },
    em: function(text) {
      var x = `<em>${text}</em>`;
      /**
        handlebars and express-handlebars are 2 different packages.
        express-handlebars basically is a wrapper to make it shorter to write handlebars code
        in express apps.

        the SafeString function is not available in express-handlebars so we need to install
        and use the main handlebars package to access the function.
      **/
      return new handlebars.SafeString(x);
    }
  }
}));

// Setting the view engine to the express-handlebars engine we created
app.set('view engine', 'hbs');

app.get('/', function (req,res) {
	res.render('/home')
}, )

app.get('/browse', function (req,res) {
  res.render('/browse')
})

app.get('/item', function (req,res) {
  res.render('/item')
})

app.get('/profile', function (req,res) {
  res.render('/profile')
})

app.use(express.static('public'));

app.listen(port, function () {
	console.log('App listening at port ' + port)
})
