
const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const signupController = {

    postSignUp: function (req, res) {

        var fName = req.body.fName;
        var lName = req.body.lName;
        var username = req.body.username;
        var pw = req.body.pw;
        var bio= req.body.bio;

        var img = fs.readFileSync(req.file.path);
        var encode_image = img.toString('base64');
        var photo = {
            contentType: req.file.mimetype,
            image:  new Buffer(encode_image, 'base64')
        }

        db.insertOne(User, {
            fName: fName,
            lName: lName,
            username: username,
            pw: pw,
            bio: bio,
            photo: photo
        });

        res.redirect('/profile/' + username);
    },

    getCheckusername: function (req, res) {

        var username = req.query.username;

        db.findOne(users, {username: username}, 'username', function (result) {
            res.send(result);
        });
    }

}

module.exports = signupController;
