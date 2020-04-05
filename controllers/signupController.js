
const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const signupController = {

    postSignUp: function (req, res) {

        var user = {
            fName : req.body.fName,
            lName : req.body.lName,
            username : req.body.username,
            pw : req.body.pw,
            bio : req.body.bio,
            photo : req.body.photo
        };

        db.insertOne(User, user);

        res.render('profile', user);
    },

    getCheckusername: function (req, res) {

        var username = req.query.username;

        db.findOne(users, {username: username}, 'username', function (result) {
            res.send(result);
        });
    }

}

module.exports = signupController;
