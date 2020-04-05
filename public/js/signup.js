$(document).ready(function () {

    $('#username').keyup(function () {

        var userName = $('#username').val();

        $.get('/getCheckusername', {username: username}, function (result) {

            if(result.username == username) {
                $('#username').css('background-color', 'red');
                $('#error').text('Username is already taken');
                $('#register').prop('disabled', true);
            }

            else {
                $('#username').css('background-color', '#E3E3E3');
                $('#error').text('');
                $('#register').prop('disabled', false);
            }
        });
    });
});
