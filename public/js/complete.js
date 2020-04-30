function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		reader.onload = function(e) {
			$('#imagePreview').css('background-image', 'url('+e.target.result +')');
			$('#imagePreview').hide();
			$('#imagePreview').fadeIn(650);
		}
		reader.readAsDataURL(input.files[0]);
	}
}
$("#imageUpload").change(function() {
	readURL(this);
});

search1 = function(e) {
	if (event.keyCode === 13) {
		location.replace("browse/" + $('#search').val());
	}
	return false;
}

search2 = function(e) {
	if (event.keyCode === 13) {
		location.replace($('#searchbox2').val());
	}
	return false;
}

const header = document.querySelector("header");
const sectionOne = document.querySelector("#firstpart_homepage");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

// sectionOneObserver.observe(sectionOne);

$("#inpt_search").on('focus', function () {
	$(this).parent('label').addClass('active');
});

$("#inpt_search").on('blur', function () {
	if($(this).val().length == 0)
		$(this).parent('label').removeClass('active');
});


// GET CONTACT INFORMATION
 function display() {
	var T = document.getElementById("contact");
	if(T.style.display === "none"){
	T.style.display = "block";  // <-- Set it to block
	} else {
		T.style.display = "none";
	}
};

// ITEM REVIEW WINDOW
function display() {
	var S = document.getElementById("sell_item");
	var I = document.getElementById("Item_review");
	var E = document.getElementById("edit_profile");
	if(I.style.display === "none"){
		I.style.display = "block";  // <-- Set it to block
		S.style.display = "none";
		E.style.display = "none";
	} 
};

// SELL ITEM WINDOW
function Sell_Item() {
	var S = document.getElementById("sell_item");
	var I = document.getElementById("Item_review");
	var E = document.getElementById("edit_profile");
	if(S.style.display === "none"){
		S.style.display = "block";  // <-- Set it to block
		I.style.display = "none";
		E.style.display = "none";

	} 
};

// EDIT PROFIE WINDOW
function Edit_Profile() {
	var S = document.getElementById("sell_item");
	var I = document.getElementById("Item_review");
	var E = document.getElementById("edit_profile");
	if(E.style.display === "none"){
	E.style.display = "block";  // <-- Set it to block
	I.style.display = "none";
	S.style.display = "none";
	} 
};

$('.posts-2').on('click', '.close-delete', function () {

	var iName = $(this).siblings('.item_description').text();
	console.log(iName);

	$(this).parent().remove();

	$.get('/deleteItem', {iName:iName});
});

$('.reviewlist').on('click', '.delete', function () {

	var review = $(this).parent('.edit_delete_reply').siblings('#reviewdiv').text();
	console.log(review);

	$(this).parent().parent().remove();

	$.get('/deleteReview', {review:review});
})