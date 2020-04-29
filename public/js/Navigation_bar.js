// var modal = document.getElementById("myModal");
// var modal2 = document.getElementById("id02");

// // var btn = document.getElementById("myBtn");

// var span = document.getElementsByClassName("close")[0];

// // btn.onclick = function() {
// //   modal.style.display = "block";
// // }

// span.onclick = function() {
//   modal.style.display = "none";
//   modal2.style.display = "none";
// }

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
