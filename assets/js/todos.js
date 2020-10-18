//check todo
$("ul").on("click","li",function(){
$(this).toggleClass("completed");
});

//click x

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){

if(event.which === 13){
	//input
	var t = $(this).val();
	$(this).val("");
	//new li
	$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + t +"</li>")
	}
});

$(".fa-plus-square").click(function(){
 $("input[type='text']").fadeToggle();
});