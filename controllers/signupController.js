
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
            if (req.body.photo == '')
            req.body.photo = 'img/dpic.jpg';

            var user = {
                fName : req.body.fName,
                lName : req.body.lName,
                username : req.body.username,
                pw : req.body.pw,
                bio : req.body.bio,
                photo : req.body.photo
            };

            db.insertOne(User, user, function(flag) {
                if(flag)
                    res.redirect('/user/' +  user.username);
            });
        }
    },

    getCheckusername: function (req, res) {

        var username = req.query.username;

        db.findOne(User, {username: username}, 'username', function (result) {
            res.send(result);
        });
    }

}

module.exports = signupController;
