$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

//click on X to delete to-do
$("ul").on("click" , "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});  
	event.stopPropagation();	
}); 

$("input[type=text]").keypress(function(event){
	    var todo = $("input[type = 'text']").val()

	if(event.which === 13 ){
		//if we are entering empty todo
		if($.trim(todo) === "")
        {
            alert("You cannot enter a empty todo!!");
            return false;
        }
		//extracting value from input text box
		var todoText=$(this).val();
		//for getting blank input after every time enter is pressed
		$(this).val("");
		//adding the value in ul as a new li in the end
		$('ul').append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type=text]").fadeToggle();
});