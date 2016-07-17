$(document).ready(function() {
	
	$('#phaseInfoContainer').hide();
	$('#playerEntry').css('opacity','0');
	$('#arrow').css('opacity','0');
	
	$('#p10titleFader').delay('500').animate({
		opacity: 0
	}, 2000, function() {
    	$('#playerEntry').animate({
		opacity: 1
	}, 1000, function() {
		//Animation complete
	});
	});
	
	$('#arrow').delay('1500').animate({
		opacity: 1
	}, 2000, function() {
    	//Animation complete
	});
	
	$('.style').click(function (){
		this.value = '';
	});

});