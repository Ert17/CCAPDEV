// var modal = document.getElementById("myModal");
// var modal2 = document.getElementById("id02");

// var btn = document.getElementById("myBtn");

// var span = document.getElementsByClassName("close")[0];

// window.onclick = function(event) {
//   if (event.target == modal||event.target == modal2) {
// 	modal.style.display = "none";
// 	modal2.style.display = "none";
//   }
// }

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


// REVIEW BOX
// $("#submit_button").click(function(){
// 	if($("#review").val()!=''){
// 		$("ol").prepend("<div class='box2 animated jackInTheBox'><div class='review_header'><img src='dpic.jpg'> <div class='review_name'>Anonymous </div></div>"+$("#review").val()+"<div class='edit_delete_reply'><button id='submit_button' class = 'reply'>Reply</button><button id='submit_button' class = 'edit'>Edit</button><button id='submit_button' class = 'delete'>Delete</button></div></div>");
// 		$('#review').val('');
// 	}
// 	else{
// 		alert("Can't submit an empty text");
// 	}
//  });

// GET CONTACT INFORMATION
 function display() {
	var T = document.getElementById("contact");
	if(T.style.display === "none"){
	T.style.display = "block";  // <-- Set it to block
	} else {
		T.style.display = "none";
	}
}

// ITEM REVIEW WINDOW
function display() {
	var S = document.getElementById("sell_item");
	var I = document.getElementById("Item_review");
	var E = document.getElementById("edit_profile");
	if(I.style.display === "none"){
		I.style.display = "block";  // <-- Set it to block
		S.style.display = "none";
		E.style.display = "block";
	} 
}

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
}

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
}