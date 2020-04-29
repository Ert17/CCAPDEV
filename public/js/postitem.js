$(document).ready(function () {
	
	function isFilled() {

        var itemname = validator.trim($('#Item_name').val());
        var description = validator.trim($('#Description').val());
        var price = validator.trim($('#Price').val());
        var quantity = validator.trim($('#Quantity').val());
        var location = validator.trim($('#Location').val());
        var contact = validator.trim($('#Contact').val());
        var payment = validator.trim($('#Payment').val());

        var itemnameEmpty = validator.isEmpty(itemname);
        var descriptionEmpty = validator.isEmpty(description);
        var priceEmpty = validator.isEmpty(price);
        var quantityEmpty = validator.isEmpty(quantity);
        var locationEmpty = validator.isEmpty(location);
        var contactEmpty = validator.isEmpty(contact);
        var paymentEmpty = validator.isEmpty(payment);

        return !itemnameEmpty && !descriptionEmpty && !priceEmpty && !quantityEmpty && !locationEmpty && !contactEmpty && !paymentEmpty;
    }

    function validateField(field, fieldName, error) {

        var value = validator.trim(field.val());
        var empty = validator.isEmpty(value);

        console.log('value is ' + value);
        // if the value of `field` is empty
        if(empty) {
            field.prop('value', '');
            error.text(fieldName + ' should not be empty.');
        }

        else
            error.text('');

        var filled = isFilled();

        if(filled) {
            console.log('fields false');
            $('#submit_button').prop('disabled', false);
        }

        else {
            console.log('fields true');
            $('#submit_button').prop('disabled', true);
        }
    }

    $('#Item_name').keyup(function () {

        validateField($('#Item_name'), 'Item Name', $('#Item_nameError'));
    });

    $('#Description').keyup(function () {

        validateField($('#Description'), 'Description', $('#DescriptionError'));
    });

    $('#Price').keyup(function () {

        validateField($('#Price'), 'Price', $('#PriceError'));
    });

    $('#Quantiy').keyup(function () {

        validateField($('#Quantity'), 'Quantity', $('#QuantityError'));
    });

    $('#Location').keyup(function () {

        validateField($('#Location'), 'Location', $('#LocationError'));
    });

    $('#Contact').keyup(function () {

        validateField($('#Contact'), 'Contact', $('#ContactError'));
    });

    $('#Payment').keyup(function () {

        validateField($('#Payment'), 'Payment', $('#PaymentError'));
    });

})