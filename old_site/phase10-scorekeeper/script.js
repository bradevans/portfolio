var p1, p2, p3, p4, p5, p6;
var screenH = 0;
var screenW = 0;

$(function(){
	
	screenH = $(window).height();
	screenW = $(window).width();
	
	$("input").css("height", screenH/8);
	$("#title").css("height", screenH/8);
	
	$("input").focus(function(){
		$(this).val("");
	});
	
	$("#go").click(function(){
		p1 = $("#p1input").val();
		p2 = $("#p2input").val();
		p3 = $("#p3input").val();
		p4 = $("#p4input").val();
		p5 = $("#p5input").val();
		p6 = $("#p6input").val();
		
		$("#addPlayerModule").animate({
			right: screenW + 100
		}, 200, function(){
			//Animation complete
		});
		
		
		
	});
	
});