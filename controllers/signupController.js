
const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const signupController = {

    postSignUp: function (req, res) {

        var fName = req.body.fName;
        var lName = req.body.lName;
        var username = req.body.username;
        var pw = req.body.pw;
        var bio= req.body.bio;
        var photo = req.body.photo;

        db.insertOne(User, {
            fName: fName,
            lName: lName,
            username: username,
            pw: pw,
            bio: bio,
            photo: photo
        });

        res.redirect('/user/' + username);
    },

    getCheckusername: function (req, res) {

        var username = req.query.username;

        db.findOne(users, {username: username}, 'username', function (result) {
            res.send(result);
        });
    }

}

module.exports = signupController;
