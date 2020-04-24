const { check } = require('express-validator');

const validation = {

    signupValidation: function () {

        var validation = [

            check('fName', 'First name should not be empty.').notEmpty(),

            check('lName', 'Last name should not be empty.').notEmpty(),

            check('usernameR', 'Username should atleast contain 4 characters.')
            .isLength({min: 4}),

            check('pwR', 'Password should contain at least 8 characters.')
            .isLength({min: 8}),

            check('bio', 'Bio should not be empty.').notEmpty()
        ];

        return validation;
    }
}

module.exports = validation;
