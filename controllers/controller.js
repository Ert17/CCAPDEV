
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

        var query = {seller: req.params.query};

        var projection = 'photo iName price';

        db.findMany(Item, query, projection, function (results) {

            if(results != null) {
                var items = results;

                res.render('browse', 
                    {
                        query: req.params.query,
                        items: results.map(results => results.toJSON())
                    });
            }
        });
    },

	getBrowse: function (req, res) {
        res.render('browse');
	},

    getItem: function (req, res) {

        var query = {iName: req.params.iName};

        var projection = 'iName seller price quantity bio MOD meet_location contact photo';

        db.findOne(Item, query, projection, function (result) {

            if(result != null) {
                var details = {
                    iName: result.iName,    
                    seller: result.seller,
                    price: result.price,
                    quantity: result.quantity,
                    bio: result.bio,
                    MOD: result.MOD,
                    meet_location: result.meet_location,
                    contact: result.contact,
                    photo: result.photo,
                };

                res.render('item', details);
            }
        });
	},

    getUser: function (req, res) {

        var query = {username: req.params.username};

        var projection = 'fName lName username bio photo';

        db.findOne(User, query, projection, function (result) {
            // db.findMany(Item, query, projection, function (Iresult) {
            //     res.render('profile',
            //         {
            //             username: req.params.username,

            //         }
            // })

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