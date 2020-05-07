
const db = require('../models/db.js');

const User = require('../models/UserModel.js');
const Item = require('../models/ItemModel.js');
const Review = require('../models/ReviewModel.js');

const { validationResult } = require('express-validator');

const cookieParser = require('cookie-parser');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const controller = {

	getHome: function (req, res) {

        var details = {};

        if(req.session.username) {
            details.flag = true;
            details.Cusername = req.session.username;
            details.CfName = req.session.fName;
        }
        else
            details.flag = false;

        db.findMany(Item, {}, '', function (results) {

            details.items = results;

            res.render('home', 
                {layout: 'home.hbs',
                items: details.items,
                flag: details.flag,
                CfName: details.CfName,
                Cusername: details.Cusername});
        })
	},


    postSignUp: function (req, res) {

        var errors = validationResult(req.body);

        if (!errors.isEmpty()) {

            errors = errors.errors;

            var details = {};

            if(req.session.username) {

                details.flag = true;
                details.Cusername = req.session.username;
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

                req.session.username = user.username;
                req.session.fName = user.fName;
                req.session.photo = user.photo;

                db.insertOne(User, user);

                res.redirect('user/' + user.username);
            });
        }
    },

    postLogIn: function (req, res) {

        var username = req.body.usernameL;
        var pw = req.body.pwL;

        console.log('pw is ' + pw);

        db.findOne(User, {username: username}, null, function (result) {
            if(result) {

                console.log('hash pw is ' + result.pw);

                var user = {
                    username: result.username,
                    fName: result.fName
                };

                bcrypt.compare(pw, result.pw, function(err, equal) {
                    if(equal){

                        req.session.username = result.username;
                        req.session.fName = result.fName;
                        req.session.photo = result.photo;

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

    postReview: function (req, res) {

        if(req.session.username) {

            var r = {
                reviewer : req.session.username,
                dpreviewer : req.session.photo,
                seller : req.body.seller,
                iName : req.body.iName,
                review : req.body.review
            }

            db.insertOne(Review, r);

            if (r.seller != '')
                res.redirect('user/' + r.seller);
            
            else if (r.iName != '')
                res.redirect('item/' + r.iName);
        }
    },

    postItem: function (req,res) {

        var errors = validationResult(req.body);

        if (!errors.isEmpty()) {

            errors = errors.errors;

            var details = {};

            if(req.session.username) {

                details.flag = true;
                details.Cusername = req.session.username;
            }
            else
                details.flag = false;

            for(i = 0; i < errors.length; i++)
                details[errors[i].param + 'Error'] = errors[i].msg;

            console.log(details);

            res.render('profile', details);
        }
        else {
            var iName = req.body.Item_name;
            var bio = req.body.Description;
            var price = req.body.Price;
            var quantity = req.body.Quantity;
            var contact = req.body.Contact;
            var MOD = req.body.Payment;
            var meet_location = req.body.Location;
            var seller = req.session.username;

            if (req.file == null){
                var photo = 'img/dpic.jpg';
            }
            else
                var photo = 'img/' + req.file.originalname;
                
                var item = {
                    iName : iName,
                    bio : bio,
                    price : price,
                    quantity : quantity,
                    contact : contact,
                    MOD : MOD,
                    meet_location: meet_location,
                    seller: seller,
                    photo: photo
                }

                db.insertOne(Item, item);

                res.redirect('user/' + req.session.username);

        }
    },

    postProfile: function (req, res) {

        var errors = validationResult(req.body);

        if (!errors.isEmpty()) {

            errors = errors.errors;

            var details = {};

            if(req.session.username) {

                details.flag = true;
                details.Cusername = req.session.username;
            }
            else
                details.flag = false;

            for(i = 0; i < errors.length; i++)
                details[errors[i].param + 'Error'] = errors[i].msg;

            console.log(details);

            res.render('home', details);
        }
        else {
            var fName = req.body.fName2;
            var lName = req.body.lName2;
            var username = req.body.usernameR2;
            var pw = req.body.pwR2;
            var bio = req.body.bio2;

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

                console.log(req.session.username);
                console.log(fName);
                console.log(lName);
                console.log(username);
                console.log(pw);
                console.log(bio);

                // db.updateOne(User, {username:user.username}, user);
                db.updateOne(User, {username:req.session.username}, user);

                req.session.username = user.username;
                req.session.fName = user.fName;
                req.session.photo = user.photo;

                console.log(req.session.username);

                res.redirect('user/' + user.username);
            });
        }
    },

    getSearch: function (req, res) {

        var query = {iName: req.params.query};

        var projection = 'photo iName price';

        var details = {};

        if(req.session.username) {
            details.flag = true;
            details.Cusername = req.session.username;
            details.CfName = req.session.fName;
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

        if(req.session.username) {
            details.flag = true;
            details.Cusername = req.session.username;
            details.CfName = req.session.fName;
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

        if(req.session.username) {
            details.flag = true;
            details.Cusername = req.session.username;
            details.CfName = req.session.fName;
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

        if(req.session.username) {
            details.flag = true;
            details.Cusername = req.session.username;
            details.CfName = req.session.fName;
        }
        else
            details.flag = false;

        if(req.session.username != query1.username)
            details.same = false;
        else
            details.same = true;


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

    getDeleteItem: function (req, res) {

        var query = {iName: req.query.iName};

        db.deleteOne(Item, query);

        res.redirect('user/' + req.session.username);
    },

    getDeleteReview: function (req, res) {

        var query = {review: req.query.review};

        db.deleteOne(Review, query);

        res.redirect('user/' + req.session.username);
    },

    getLogOut: function (req, res) {

        req.session.destroy(function(err) {
            if (err) throw err;

            res.redirect('/');
        })

    }

}

module.exports = controller;