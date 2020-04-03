// import module from `../models/db.js`
const db = require('../models/db.js');

// defines an object which contains functions executed as callback when
// a client requests for a certain path in the server
const controller = {

	getHome: function (req, res) {
		res.render('home', {layout: 'home.hbs'});
	},

    getSearch: function (req, res) {
        var s = req.params.search;

        var query = {iName: s};

        db.findMany('profiles', query, function (result) {

            // renders `../views/profile.hbs` with the values in variable `results`
            res.redirect('/browse/', + s );
        });
    },

	getBrowse: function (req, res) {
        res.render('browse', result);
	},

    getItem: function (req, res) {
		
        var i = req.params.iName;

        var query = {iName: i};

        db.findOne('items', query, function (result) {
            res.render('item', result);
        });
	},

    getProfile: function (req, res) {

        var u = req.params.username;

        var query = {username: u};

        db.findOne('profiles', query, function (result) {

            res.render('profile', result);
        });
    }
}

module.exports = controller;