
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

        var query = {iName: req.param.query};

        db.findMany(Item, query, function (result) {

            res.send(req.param);
        });
    },

	getBrowse: function (req, res) {
        res.render('browse');
	},

    getItem: function (req, res) {
		
        var i = req.params.iName;

        var query = {iName: i};

        db.findOne(Item, query, function (result) {
            res.render('item', result);
        });
	},

    getUser: function (req, res) {

        var query = {username: req.params.username};

        var projection = 'fName lName username bio photo';

        db.findOne(User, query, projection, function (result) {

            if(result != null) {
                var details = {
                    fName: result.fName,    
                    lName: result.lName,
                    username: result.username,
                    bio: result.bio,
                    photo: result.photo
                };

                res.render('profile', details);
            }
        });
    }
}

module.exports = controller;