
// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// // import module `User` from `../models/UserModel.js`
// const User = require('../models/UserModel.js');

// defines an object which contains functions executed as callback
// when a client requests for `signup` paths in the server
const signupController = {

    // executed when the client sends an HTTP POST request `/signup`
    // as defined in `../routes/routes.js`
    postSignUp: function (req, res) {

        // when submitting forms using HTTP POST method
        // the values in the input fields are stored in the req.body object
        // each <input> element is identified using its `name` attribute
        // Example: the value entered in <input type="text" name="fName">
        // can be retrieved using req.body.fName
        var fName = req.body.fName;
        var lName = req.body.lName;
        var username = req.body.username;
        var pw = req.body.pw;
        var bio= req.body.bio;

        // calls the function insertOne()
        // defined in the `database` object in `../models/db.js`
        // this function adds a document to collection `users`
        db.insertOne(User, {
            fName: fName,
            lName: lName,
            username: username,
            pw: pw,
            bio: bio
        });

        // upon adding a user to the database,
        // redirects the client to `/success` using HTTP GET,
        // defined in `../routes/routes.js`
        // passing values using URL
        // which calls getSuccess() method defined in `./successController.js`
        res.redirect('/success?username=' + username);
    },

    // executed when the client sends an HTTP GET request `/getCheckID`
    // as defined in `../routes/routes.js`
    getCheckusername: function (req, res) {

        // when passing values using HTTP GET method
        // the values are stored in the req.query object
        // Example url: `http://localhost/getCheckID?idNum=11312345`
        // To retrieve the value of parameter `idNum`: req.query.idNum
        var username = req.query.username;

        // calls the function findOne()
        // defined in the `database` object in `../models/db.js`
        // searches for a single document based on the model `User`
        // sends an empty string to the user if there are no match
        // otherwise, sends an object containing the idNum
        db.findOne(users, {username: username}, 'username', function (result) {
            res.send(result);
        });
    }

}

// exports the object `signupController` (defined above)
// when another script exports from this file
module.exports = signupController;
