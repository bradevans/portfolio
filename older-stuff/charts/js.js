$(document).ready(function(){
	
	$("a").click(function(event){
		
		alert("fuck that");
		event.preventDefault();
	});
	
	
	
	$("#orderedList li:last").hover(function() {
		$(this).addClass("green");
	},function(){
		$(this).removeClass("green");
	});
   
   

	/*$("a").addClass("test");
	$("li").addClass("red")*/
});