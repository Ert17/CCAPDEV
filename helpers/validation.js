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
    },

    itemValidation: function () {

        var validation = [

            check('Item_name', 'Item name should not be empty.').notEmpty(),

            check('Description', 'Description should not be empty.').notEmpty(),

            check('Price', 'Price should not be empty.').notEmpty(),

            check('Quantity', 'Quantity should not be empty.').notEmpty(),

            check('Location', 'Location should not be empty.').notEmpty(),

            check('Contact', 'Contact should not be empty.').notEmpty(),

            check('Payment', 'Payment should not be empty.').notEmpty()

        ];

        return validation;
    }
}

module.exports = validation;
