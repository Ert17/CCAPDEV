$(document).ready(function () {

    $('#username').keyup(function () {

        var userName = $('#username').val();

        $.get('/getCheckusername', {username: username}, function (result) {

            // if the current value of idNum exists in the database
            // change the background-color of the `<input>` element to red
            // display an error message
            // and disable the submit button
            if(result.username == username) {
                $('#username').css('background-color', 'red');
                $('#error').text('Username is already taken');
                $('#register').prop('disabled', true);
            }

            // else
            // change the background-color of the `<input>` element back
            // remove the error message
            // and enable the submit button
            else {
                $('#username').css('background-color', '#E3E3E3');
                $('#error').text('');
                $('#register').prop('disabled', false);
            }
        });
    });
});
