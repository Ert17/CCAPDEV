
const db = require('../models/db.js');

const User = require('../models/UserModel.js');
const Item = require('../models/ItemModel.js');
const Request = require('../models/RequestModel.js');
const Review = require('../models/ReviewModel.js');

const controller = {

	getHome: function (req, res) {

        db.findMany(Item, {}, '', function (results) {
            res.render('home', 
                {layout: 'home.hbs',
                items: results});
        })
	},

    getSearch: function (req, res) {

        var query = {iName: req.params.query};

        var projection = 'photo iName price';

        db.findMany(Item, query, projection, function (results) {

            if(results != null) {
                var items = results;

                res.render('browse', 
                    {
                        query: req.params.query,
                        items: results
                    });
            }
        });
    },

	getBrowse: function (req, res) {

        db.findMany (Item, {}, '', function (results) {

            if(results != null) {
                var items = results;

                res.render('browse', 
                    {
                        items: results
                    });
            }
        })

	},

    getItem: function (req, res) {

        var query = {iName: req.params.iName};

        var projection = 'iName seller price quantity bio MOD meet_location contact photo';

        db.findOne(Item, query, projection, function (result) {
            db.findMany(Review, query, '', function (results) {
                
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
                        reviews: results
                    };

                    res.render('item', details);
                }
            });
        });
	},

    getUser: function (req, res) {

        var query1 = {username: req.params.username};
        var query2 = {seller: req.params.username};

        // var projection = 'fName lName username bio photo';

        db.findOne(User, query1, '', function (result) {
            db.findMany(Item, query2, '', function (results1) {
                db.findMany(Review, query2, '', function (results2) {

                    if(result != null) {
                        var details = {
                            fName: result.fName,    
                            lName: result.lName,
                            username: result.username,
                            bio: result.bio,
                            photo: result.photo,
                            items: results1,
                            reviews: results2
                        };

                        res.render('profile', details);
                    }
                });
            });   
        });
    }//,

    // addReview: function (req, res) {

    //     var 
    // }
}

module.exports = controller;