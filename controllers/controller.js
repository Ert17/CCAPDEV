
const db = require('../models/db.js');

const User = require('../models/UserModel.js');
const Item = require('../models/ItemModel.js');
const Request = require('../models/RequestModel.js');
const Review = require('../models/ReviewModel.js');

const controller = {

	getHome: function (req, res) {
		res.render('home', {layout: 'home.hbs'});
	},

    getSearch: function (req, res) {
        var s = req.params.search;

        var query = {iName: s};

        db.findMany(Item, query, function (result) {

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

        db.findOne(Item, query, function (result) {
            res.render('item', result);
        });
	},

    getUser: function (req, res) {

        var query = {username: req.query.username};

        var projection = 'fName lName username bio photo';

        db.findOne(User, query, function (result) {

            if(result != null) {
                var details = {
                    fName: result.fName,
                    lName: result.lName,
                    username: result.username
                };

                res.render('profile', details);
            }
        });
    }
}

module.exports = controller;