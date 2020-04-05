
const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const signupController = {

    postSignUp: function (req, res) {
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

        db.insertOne(User, user);

        res.redirect('/user/' +  user.username);
    },

    getCheckusername: function (req, res) {

        var username = req.query.username;

        db.findOne(users, {username: username}, 'username', function (result) {
            res.send(result);
        });
    }

}

module.exports = signupController;
