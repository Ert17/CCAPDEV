$(document).on('click', '.enter_reviewItem', function() {

	var review = $('#reviewboxItem').val();
	console.log(review);

	var iName = $(this).parent('form').parent('div').parent('div').parent('section').siblings('.item').children('div').children('#itemName').text();
	console.log(iName);

	if (review != '') {
		$.post('/review', 
		{
			iName: iName,
			review: review
		});

		$('#reviewboxItem').val('');
	}
	else
		alert("Can't submit an empty text");

});

$(document).on('click', '.enter_reviewUser', function() {

	var review = $('#reviewboxUser').val();
	console.log(review);

	var seller = $(this).parent('form').parent('div').parent('div').parent('section').parent('div').siblings('.profile').children('#username').text();
	console.log(seller);

	var sellername = seller.substring(1);

	if (review != '') {
		$.post('/review', 
		{
			seller: sellername,
			review: review
		});
	}
	else
		alert("Can't submit an empty text");

});