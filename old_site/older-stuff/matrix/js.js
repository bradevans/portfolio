var structure0 = ['one','two','three','four','five','six','seven','eight','nine'];

var structure1 = [['none','two','four','none'],['none','three','five','one'],['none','none','six','two'],['one','five','seven','none'],['two','six','eight','four'],['three','none','nine','five'],['four','eight','none','none'],['five','nine','none','seven'],['six','none','none','eight']];

var current = 'five';

$(document).ready(function(){

	$(".base").css({
		left: '4000',
		top: '4000'
	});
	
	$("#five").css({
		left: '0',
		top: '0'
	});
	
	$("#topArrow").click(function(){
	
		if (structure1[structure0.indexOf(current)][0] != 'none'){
			
			$("#" + structure1[structure0.indexOf(current)][0]).css({
				top: -($(window).height()),
				left: '0'
			});
			
			$("#" + current).animate({
				top: "+=" + $(window).height()
			}, 200, function(){
				//animation complete
			});
			
			$("#" + structure1[structure0.indexOf(current)][0]).animate({
				top: "+=" + $(window).height()
			}, 200, function(){
				//animation complete
				current = structure1[structure0.indexOf(current)][0];
			});
		}
	});
	
	$("#rightArrow").click(function(){
	
		if (structure1[structure0.indexOf(current)][1] != 'none'){
			
			$("#" + structure1[structure0.indexOf(current)][1]).css({
				left: $(window).width(),
				top: '0'
			});
			
			$("#" + current).animate({
				left: "-=" + $(window).width()
			}, 200, function(){
				//animation complete
			});
			
			$("#" + structure1[structure0.indexOf(current)][1]).animate({
				left: "-=" + $(window).width()
			}, 200, function(){
				//animation complete
				current = structure1[structure0.indexOf(current)][1];
			});
		}
	});
	
	$("#bottomArrow").click(function(){
	
		if (structure1[structure0.indexOf(current)][2] != 'none'){
			
			$("#" + structure1[structure0.indexOf(current)][2]).css({
				top: $(window).height(),
				left: '0'
			});
			
			$("#" + current).animate({
				top: "-=" + $(window).height()
			}, 200, function(){
				//animation complete
			});
			
			$("#" + structure1[structure0.indexOf(current)][2]).animate({
				top: "-=" + $(window).height()
			}, 200, function(){
				//animation complete
				current = structure1[structure0.indexOf(current)][2];
			});
		}
	});
	
	$("#leftArrow").click(function(){
	
		if (structure1[structure0.indexOf(current)][3] != 'none'){
			
			$("#" + structure1[structure0.indexOf(current)][3]).css({
				left: -($(window).width()),
				top: '0'
			});
			
			$("#" + current).animate({
				left: "+=" + $(window).width()
			}, 200, function(){
				//animation complete
			});
			
			$("#" + structure1[structure0.indexOf(current)][3]).animate({
				left: "+=" + $(window).width()
			}, 200, function(){
				//animation complete
				current = structure1[structure0.indexOf(current)][3];
			});
		}
	});
	
	
	
});