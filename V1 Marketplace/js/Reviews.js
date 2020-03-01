$("#submit_button").click(function(){
	if($("#review").val()!=''){
		$("ol").prepend("<div class='box2 animated jackInTheBox'><div class='review_header'><img src='dpic.jpg'> <div class='review_name'>Anonymous </div></div>"+$("#review").val()+"</div>");
		$('#review').val('');
	}
	else{
		alert("Can't submit an empty text");
	}
 });