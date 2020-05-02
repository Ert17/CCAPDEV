$(document).ready(function () {

    function isFilled() {

        var fName = validator.trim($('#fName2').val());
        var lName = validator.trim($('#lName2').val());
        var usernameR = validator.trim($('#usernameR2').val());
        var pwR = validator.trim($('#pwR2').val());
        var bio = validator.trim($('#bio2').val());

        var fNameEmpty = validator.isEmpty(fName);
        var lNameEmpty = validator.isEmpty(lName);
        var usernameREmpty = validator.isEmpty(usernameR);
        var pwREmpty = validator.isEmpty(pwR);
        var bioEmpty = validator.isEmpty(bio);

        return !fNameEmpty && !lNameEmpty && !usernameREmpty && !pwREmpty && !bioEmpty;
    }

    function isValidUsername(field, callback) {

        var username = validator.trim($('#usernameR2').val());
        var isValidLength = validator.isLength(username, {min: 4});

        console.log('Username is' + username);

        if(isValidLength) {

            $.get('/getCheckusername', {username: username}, function (result) {

                if(result.username != username) {

                    if(field.is($('#usernameR2'))) 
                        $('#username2Error').text('');
                    console.log('username true');

                    return callback(true);
                }

                else {

                    if(field.is($('#usernameR2')))
                        $('#username2Error').text('Username is already taken.');

                    console.log('username false');
                    return callback(false);
                }
            });
        }

        else {

            if(field.is($('#usernameR2'))){
                console.log('username false');
                $('#username2Error').text('Username should contain at least 4 characters.');
            }

            return callback(false);
        }
    }

    function isValidPassword(field) {

        var validPassword = false;

        var password = validator.trim($('#pwR2').val());
        var isValidLength = validator.isLength(password, {min: 8});

        if(isValidLength) {

            if(field.is($('#pwR2')))
                $('#pw2Error').text('');

            validPassword = true;

            console.log('pw true');
        }

        else {

            if(field.is($('#pwR2')))
                $('#pw2Error').text(`Passwords should contain at least 8
                    characters.`);
            console.log('pw false');
        }

        return validPassword;
    }

    function validateField(field, fieldName, error) {

        var value = validator.trim(field.val());
        var empty = validator.isEmpty(value);

        // if the value of `field` is empty
        if(empty) {
            field.prop('value', '');
            error.text(fieldName + ' should not be empty.');
        }

        else
            error.text('');

        var filled = isFilled();

        var validPassword = isValidPassword(field);

        isValidUsername(field, function (validUsername) {

            console.log(filled + validPassword + validUsername);

            if(filled && validPassword && validUsername) {
                console.log('fields false');
                $('#update').prop('disabled', false);
            }

            else {
                console.log('fields true');
                $('#update').prop('disabled', true);
            }
        });
    }


    $('#fName2').keyup(function () {

        validateField($('#fName2'), 'First Name', $('#fName2Error'));
    });

    $('#lName2').keyup(function () {

        validateField($('#lName2'), 'Last name', $('#lName2Error'));
    });

    $('#usernameR2').keyup(function () {

        validateField($('#usernameR2'), 'Username', $('#username2Error'));
    });

    $('#pwR2').keyup(function () {

        validateField($('#pwR2'), 'Password', $('#pw2Error'));
    });

    $('#bio2').keyup(function () {

        validateField($('#bio2'), 'Bio', $('#bio2Error'));
    });

});
