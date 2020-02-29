$("#submit_button").click(function(){
	if($("#review").val()!=''){
		$("ol").prepend("<div class='box2 animated jackInTheBox'><img src='dpic.jpg'> Anonymous <br><br>"+$("#review").val()+"</div>");
		$('#review').val('');
	}
	else{
		alert("Can't submit an empty text");
	}
 });