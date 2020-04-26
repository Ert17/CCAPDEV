
const db = require('../models/db.js');

const User = require('../models/UserModel.js');
const Item = require('../models/ItemModel.js');
const Request = require('../models/RequestModel.js');
const Review = require('../models/ReviewModel.js');

const { validationResult } = require('express-validator');

const cookieParser = require('cookie-parser');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const controller = {

	getHome: function (req, res) {

        db.findMany(Item, {}, '', function (results) {
            res.render('home', 
                {layout: 'home.hbs',
                items: results});
        })
	},


    postSignUp: function (req, res) {

        var errors = validationResult(req.body);

        if (!errors.isEmpty()) {

            errors = errors.errors;

            var details = {};

            if(req.cookies.userData.username) {

                details.flag = true;
                details.Cusername = req.cookies.userData.username;
            }
            else
                details.flag = false;

            for(i = 0; i < errors.length; i++)
                details[errors[i].param + 'Error'] = errors[i].msg;

            console.log(details);

            res.render('home', details);
        }
        else {
            var fName = req.body.fName;
            var lName = req.body.lName;
            var username = req.body.usernameR;
            var pw = req.body.pwR;
            var bio = req.body.bio;

            if (req.file == null){
                var photo = 'img/dpic.jpg';
            }
            else
                var photo = 'img/' + req.file.originalname;

            bcrypt.hash(pw, saltRounds, function(err, hash) {
                
                var user = {
                    fName : fName,
                    lName : lName,
                    username : username,
                    pw : hash,
                    bio : bio,
                    photo : photo
                }

                db.insertOne(User, user, function (result) {
                    db.findOne(User, {username: user.username}, '', function (result) {
                        res.cookie('userData', result);
                    });
                });

                res.redirect('user/' + username);
            }); 
        }
    },

    postLogIn: function (req, res) {

        var username = req.body.usernameL;
        var pw = req.body.pwL;

        console.log('pw is ' + pw);

        db.findOne(User, {username: username}, null, function (result) {
            if(result) {

                res.cookie("userData", result);

                console.log('hash pw is ' + result.pw);

                var user = {
                    username: result.username,
                    fName: result.fName
                };

                bcrypt.compare(pw, result.pw, function(err, equal) {
                    if(equal){

                        res.redirect('user/' + user.username);
                    }

                    else {
                        var details = {flag: false, error: `Username and/or Password is incorrect.`}
                        res.render('home', {layout: 'home.hbs',
                                    error: details.error});
                    }
                });
            }

            else {
                var details = {flag: false, error: `Username and/or Password is incorrect.`}
                res.render('home', {layout: 'home.hbs',
                                    error: details.error});
            }
        });
    },

    getSearch: function (req, res) {

        var query = {iName: req.params.query};

        var projection = 'photo iName price';

        var details = {};

        if(req.cookies.userData.username) {
            details.flag = true;
            details.Cusername = req.cookies.userData.username;
            details.CfName = req.cookies.userData.fName;
        }
        else
            details.flag = false;

        db.findMany(Item, query, projection, function (results) {

            if(results != null) {
                details.items = results;
                details.query = req.params.query;

                res.render('browse', details);
            }
        });
    },

	getBrowse: function (req, res) {

        var details = {};

        if(req.cookies.userData.username) {
            details.flag = true;
            details.Cusername = req.cookies.userData.username;
            details.CfName = req.cookies.userData.fName;
        }
        else
            details.flag = false;

        db.findMany (Item, {}, '', function (results) {

            if(results != null) {
                details.items = results;

                res.render('browse', details);
            }
        })

	},

    getItem: function (req, res) {

        var query = {iName: req.params.iName};

        var projection = 'iName seller price quantity bio MOD meet_location contact photo';

        var details = {};

        if(req.cookies.userData.username) {
            details.flag = true;
            details.Cusername = req.cookies.userData.username;
            details.CfName = req.cookies.userData.fName;
        }
        else
            details.flag = false;

        db.findOne(Item, query, projection, function (result) {
            db.findMany(Review, query, '', function (results) {
                
                if(result != null) {

                    details.iName = result.iName,    
                    details.seller = result.seller,
                    details.price = result.price,
                    details.quantity = result.quantity,
                    details.bio = result.bio,
                    details.MOD = result.MOD,
                    details.meet_location = result.meet_location,
                    details.contact = result.contact,
                    details.photo = result.photo,
                    details.reviews = results

                    res.render('item', details);
                }
            });
        });
	},

    getUser: function (req, res) {

        var query1 = {username: req.params.username};
        var query2 = {seller: req.params.username};
        var details = {};

        if(req.cookies.userData.username) {
            details.flag = true;
            details.Cusername = req.cookies.userData.username;
            details.CfName = req.cookies.userData.fName;
        }
        else
            details.flag = false;


        db.findOne(User, query1, '', function (result) {
            db.findMany(Item, query2, '', function (results1) {
                db.findMany(Review, query2, '', function (results2) {

                    if(result != null) {
                        details.fName = result.fName,    
                        details.lName = result.lName,
                        details.username = result.username,
                        details.bio = result.bio,
                        details.photo = result.photo,
                        details.items = results1,
                        details.reviews = results2

                        res.render('profile', details);
                    }
                });
            });   
        });
    },

    getCheckusername: function (req, res) {

        var username = req.query.username;

        db.findOne(User, {username: username}, 'username', function (result) {
            res.send(result);
        });
    },

    getLogOut: function (req, res) {

        if (req.session.user && req.cookies.user_sid) {
            res.clearCookie('user_sid');
            res.redirect('/');
        } 
        else {
            res.redirect('/');
        }
    }

    //,

    // addReview: function (req, res) {

    //     var 
    // }
}

module.exports = controller;