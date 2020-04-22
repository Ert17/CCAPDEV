
const { validationResult } = require('express-validator');

const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const signupController = {

    postSignUp: function (req, res) {

        var errors = validationResult(req);

        if (!errors.isEmpty()) {

            errors = errors.errors;

            var details = {};
            for(i = 0; i < errors.length; i++)
                details[errors[i].param + 'Error'] = errors[i].msg;

            res.render('partials/headerhome', details);
        }
        else {
            var fName = req.body.fName;
            var lName = req.body.lName;
            var username = req.body.username;
            var pw = req.body.pw;
            var bio = req.body.bio;
            
            if (req.body.photo == '')
            var photo = 'img/dpic.jpg';

            bcrypt.hash(pw, saltRounds, function(err, hash) {
                
                var user = {
                fName : fName,
                lName : lName,
                username : username,
                pw : hash,
                bio : bio,
                photo : photo
                }

                db.insertOne(User, user, function(flag) {
                    if(flag)
                        res.redirect('/user/' +  user.username);
                });
            }); 
        }
    },

    getCheckusername: function (req, res) {

        var username = req.query.username;

        db.findOne(User, {username: username}, 'username', function (result) {
            res.send(result);
        });
    },

    postLogIn: function (req, res) {

        var username = req.body.username;
        var pw = req.body.pw;

        db.findOne(User, {username: username}, '', function (result) {
            if(result) {

                var user = {
                    fName : fName,
                    lName : lName,
                    username : username,
                    pw : hash,
                    bio : bio,
                    photo : photo
                };

                bcrypt.compare(pw, result.pw, function(err, equal) {
                    if(equal)
                        res.redirect('/user/' + user.username);

                    else {
                        var details = {error: `Username and/or Password is incorrect.`}
                        res.render('partials/headerhome', details);
                    }
                });
            }

            else {
                var details = {error: `Username and/or Password is incorrect.`}
                res.render('partials/headerhome', details);
            }
        });
    }

}

module.exports = signupController;
