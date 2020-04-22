$(document).ready(function () {

    function isFilled() {

        var fName = validator.trim($('#fName').val());
        var lName = validator.trim($('#lName').val());
        var username = validator.trim($('#username').val());
        var pw = validator.trim($('#pw').val());
        var bio = validator.trim($('#bio').val());

        var fNameEmpty = validator.isEmpty(fName);
        var lNameEmpty = validator.isEmpty(lName);
        var usernameEmpty = validator.isEmpty(username);
        var pwEmpty = validator.isEmpty(pw);
        var bioEmpty = validator.isEmpty(bio);

        return !fNameEmpty && !lNameEmpty && !usernameEmpty && !pwEmpty && !bioEmpty;
    }

    function isValidUsername(field, callback) {

        var username = validator.trim($('#username').val());
        var isValidLength = validator.isLength(username, {min: 4});

        if(isValidLength) {

            $.get('/getCheckusername', {username: username}, function (result) {

                if(result.username != username) {

                    if(field.is($('#username'))) 
                        $('#usernameError').text('');
                    console.log('username true');

                    return callback(true);
                }

                else {

                    if(field.is($('#username')))
                        $('#usernameError').text('Username is already taken.');

                    console.log('username false');
                    return callback(false);
                }
            });
        }

        else {

            if(field.is($('#username'))){
                console.log('username false');
                $('#usernameError').text('Username should contain at least 4 characters.');
            }

            return callback(false);
        }
    }

    function isValidPassword(field) {

        var validPassword = false;

        var password = validator.trim($('#pw').val());
        var isValidLength = validator.isLength(password, {min: 8});

        if(isValidLength) {

            if(field.is($('#pw')))
                $('#pwError').text('');

            validPassword = true;

            console.log('pw true');
        }

        else {

            if(field.is($('#pw')))
                $('#pwError').text(`Passwords should contain at least 8
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
                $('#register').prop('disabled', false);
            }

            else {
                console.log('fields true');
                $('#register').prop('disabled', true);
            }
        });
    }


    $('#fName').keyup(function () {

        validateField($('#fName'), 'First Name', $('#fNameError'));
    });

    $('#lName').keyup(function () {

        validateField($('#lName'), 'Last name', $('#lNameError'));
    });

    $('#username').keyup(function () {

        validateField($('#username'), 'Username', $('#usernameError'));
    });

    $('#pw').keyup(function () {

        validateField($('#pw'), 'Password', $('#pwError'));
    });

    $('#bio').keyup(function () {

        validateField($('#bio'), 'Bio', $('#bioError'));
    });

});
