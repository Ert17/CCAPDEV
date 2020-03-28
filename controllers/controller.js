// import module from `../models/db.js`
const db = require('../models/db.js');

// defines an object which contains functions executed as callback when
// a client requests for a certain path in the server
const controller = {

	getHome: function (req, res) {
		res.render('home', {layout: 'home.hbs'});
	},

	getBrowse: function (req, res) {
		res.render('browse');
	},

    getItem: function (req, res) {
		
        // gets the parameter `username` from the URL
        var i = req.params.iName;

        // creates an object `query` which assigns the value of the variable `u` to field `username`
        var query = {iName: i};

        // calls the function findOne() defined in the `database` object in `../models/db.js`
        // this function searches the collection `profiles` based on the value set in object `query`
        // the third parameter is a callback function
        // this called when the database returns a value saved in variable `result`
        db.findOne('items', query, function (result) {

            // renders `../views/profile.hbs` with the values in variable `results`
            res.render('item', result);
        });
	},

    // executed when the client sends an HTTP GET request `/:username`
    // as defined in `../routes/routes.js`
    getProfile: function (req, res) {

        // gets the parameter `username` from the URL
        var u = req.params.username;

        // creates an object `query` which assigns the value of the variable `u` to field `username`
        var query = {username: u};

        // calls the function findOne() defined in the `database` object in `../models/db.js`
        // this function searches the collection `profiles` based on the value set in object `query`
        // the third parameter is a callback function
        // this called when the database returns a value saved in variable `result`
        db.findOne('profiles', query, function (result) {

            // renders `../views/profile.hbs` with the values in variable `results`
            res.render('profile', result);
        });
    }
}

// exports the object `controller` (defined above) when another script exports from this file
module.exports = controller;