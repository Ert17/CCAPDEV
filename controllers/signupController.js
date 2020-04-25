
const { validationResult } = require('express-validator');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const signupController = {

    postSignUp: function (req, res) {

        var errors = validationResult(req.body);

        if (!errors.isEmpty()) {

            errors = errors.errors;

            var details = {};
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

                db.insertOne(User, user);

                res.redirect('user/' + username);
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

        var username = req.body.usernameL;
        var pw = req.body.pwL;

        console.log('pw is ' + pw);

        db.findOne(User, {username: username}, '', function (result) {
            if(result) {
                console.log('hash pw is ' + result.pw);
                bcrypt.compare(pw, result.pw, function(err, equal) {
                    if(equal)
                        res.redirect('user/' + username);

                    else {
                        var details = {error: `Username and/or Password is incorrect.`}
                        res.render('home', {layout: 'home.hbs',
                                    error: details.error});
                    }
                });
            }

            else {
                var details = {error: `Username and/or Password is incorrect.`}
                res.render('home', {layout: 'home.hbs',
                                    error: details.error});
            }
        });
    }

}

module.exports = signupController;
