var folioVisibility = false;
var resumeVisibility = false;

$(document).ready(function() {
	
	$(".portfolio").click(function(){
	
		$("#bN").transition({ x: -44 }, 450, 'in');
		$("#rN").transition({ x: -59, y: 10, rotate: 49}, 455, 'in');
		$("#aN").transition({ x: -74, y: -12, rotate: 11}, 455, 'in');
		$("#dN").transition({ x: -59, y: -12, rotate: 309}, 455, 'in');
		$("#eN").transition({ x: -59, y: -12, rotate: 11}, 455, 'in');
		$("#vN").transition({ x: -59, y: -12, rotate: 11}, 455, 'in');
		$("#a2N").transition({ x: -59, y: -12, rotate: 11}, 455, 'in');
		$("#nN").transition({ x: -59, y: -12, rotate: 11}, 455, 'in');
		$("#sN").transition({ x: -59, y: -12, rotate: 11}, 455, 'in');
		
	
		toggleFolio();
	});
	
	$(".resumeLink").click(function(){
		toggleResume();
	});
	
	function toggleFolio(){
		if (folioVisibility == false){
		
			if (resumeVisibility == true){
				$(".resume").fadeOut(100);
				resumeVisibility = false;
			} else {
				// do nothing
			}
		
			$("img").fadeIn(1000);
			$(".titles").fadeIn(1000);
			folioVisibility = true;
		} else {
			$("img").fadeOut(1000);
			$(".titles").fadeOut(1000);
			folioVisibility = false;
		}
	}	
	
	function toggleResume(){
		if (resumeVisibility == false){
		
			if (folioVisibility == true){
				$("img").fadeOut(100);
				$(".titles").fadeOut(100);
				folioVisibility = false;
			} else {
				// do nothing
			}
		
			$(".resume").fadeIn(1000);
			resumeVisibility = true;
		} else {
			$(".resume").fadeOut(1000);
			resumeVisibility = false;
		}
	}
	
});