var whereIam = '#homeDiv';
var whereImGoing;
var whereIveBeen = [];
var scrollDir;
var navLR;

//var divContainers = ['#homeDiv','#IDiv','#IIDiv','#IIIDiv','#IVDiv','#endDiv','#IDivOne','#IDivTwo','#IDivThree','#IIDivOne','#IIDivTwo','#IIDivThree','#IIIDivOne','#IIIDivTwo','#IIIDivThree','#IVDivOne','#IVDivTwo','#IVDivThree'];
//var divContent = ['#homeDivC','#IDivC','#IIDivC','#IIIDivC','#IVDivC','#endDivC','#IDivOneC','#IDivTwoC','#IDivThreeC','#IIDivOneC','#IIDivTwoC','#IIDivThreeC','#IIIDivOneC','#IIIDivTwoC','#IIIDivThreeC','#IVDivOneC','#IVDivTwoC','#IVDivThreeC'];

$(document).ready(function (){

	var theW = $(window).width();
	var theH = $(window).height();
	
	$(window).resize(function(){
		theW = $(window).width();
		theH = $(window).height();
		setAllCSS();
		whereIam = '#homeDiv';
		whereImGoing = '#IDiv';
		var whereIveBeen = [];
	});
	
	$('.nav').css({display: 'none'});
	
	$('#navR').mouseenter(function (){$(this).animate({'right' : '-=5px'}, 100)}).mouseleave(function (){$(this).animate({'right' : '+=5px'}, 100)});
	$('#navL').mouseenter(function (){$(this).animate({'left' : '-=5px'}, 100)}).mouseleave(function (){$(this).animate({'left' : '+=5px'}, 100)});
	
	$('#homeDivC').fadeIn(3000);
	
	$('.pSmall').fadeIn(3000);
	
	/*function hideContentDivs(){
		$('.contentDivs').css({
			display: 'none'
		});
	}*/
	
	function displayRightNav(){
		$('#navR').fadeIn('fast');
	}
	
	function hideRightNav(){
		$('#navR').fadeOut('fast');
	}
	
	function displayLeftNav(){
		$('#navL').fadeIn('fast');
	}
	
	function hideLeftNav(){
		$('#navL').fadeOut('fast');
	}
	
	setAllCSS();
	
	function setAllCSS(){
	
		$('#homeDiv').css({
			top: '0px'
		});
		
		$('#homeDiv,#IDiv,#IIDiv,#IIIDiv,#IVDiv,#endDiv').css({
			left: '0px'
		});
		
		$('#IDiv,#IIDiv,#IIIDiv,#IVDiv,#endDiv').css({
			top: theH + 'px'
		});
		
		$('#IDivOne,#IIDivOne,#IIDivOne,#IVDivOne').css({
			top: theH + 'px',
			left: theW + 'px'
		});
		
		$('#IDivTwo,#IIDivTwo,#IIDivTwo,#IVDivTwo').css({
			top: theH + 'px',
			left: (theW * 2) + 'px'
		});
		
		$('#IDivThree,#IIDivThree,#IIDivThree,#IVDivThree').css({
			top: theH + 'px',
			left: (theW * 3) + 'px'
		});
		
		$('#IDivOne,#IDivTwo,#IDivThree,#IIDivOne,#IIDivTwo,#IIDivThree,#IIIDivOne,#IIIDivTwo,#IIIDivThree,#IVDivOne,#IVDivTwo,#IVDivThree').css({
			top: '0px',
			left: theW + 'px'
		});
	}
	
	function pushWhereIveBeen(b){
		if(b == '#IDiv' || b == '#IIDiv' || b == '#IIIDiv' || b == '#IVDiv'){
			if (b == whereIveBeen[0] || b == whereIveBeen[1] || b == whereIveBeen[2] || b == whereIveBeen[3]){
				//do nothing
			} else {
				whereIveBeen.push(b);
			}
		}
	}
	
	$('html').mousewheel(wheelF);
	
	function showHideEndFooter(){
		if (whereIam == '#endDiv'){
			$('#endDivFooter').stop().fadeOut(200);
		} else if (whereIam == '#IVDiv' || whereIam == '#IVDivOne' || whereIam == '#IVDivTwo' || whereIam == '#IVDivThree'){
			$('#endDivFooter').stop().fadeIn(8000);
		}
	}
	
	function showHideDemoDown(){
		if (whereIam == '#IDivThree' || whereIam == '#IIDivThree' || whereIam == '#IIIDivThree' || whereIam == '#IVDivThree'){
			$('.demoDowns').fadeIn(8000);
		} else {
			$('.demoDowns').fadeOut(200);
		}
	}
	
																													/////
																												   /////
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////// NAV CLICK FUNCTIONALITY
	$('.nav').click(function(){
		pushWhereIveBeen(whereIam);
		if (this.id == 'navR'){
			navigateRight();
		} else {
			navigateLeft();
		}
	});
	
																													/////
																												   /////
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////// KEY FUNCTIONALITY
	bindKeydown();
	
	function bindKeydown(){
		$(document).keydown(function(e){
			switch (e.which) {
				case 38: //UP
					if(whereIam == '#homeDiv'){
						//do nothing
					} else {
						$(document).unbind('keydown');
						navigateUp();
					}
				break;
				
				case 40: //DOWN
					if(whereIam == '#endDiv'){
						//do nothing
					} else {
						$(document).unbind('keydown');
						navigateDown();
					}
				break;
				
				case 37: //LEFT
					$(document).unbind('keydown');
					navigateLeft();
				break;
				
				case 39: //RIGHT
					if(whereIam == '#homeDiv'){
						//do nothing
					} else {
						$(document).unbind('keydown');
						navigateRight();
					}
				break;
			}
		});
	}
	
																													/////
																												   /////
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////// WHEEL FUNCTIONALITY
	function wheelF(event, delta){
		
		$('html').unbind('mousewheel');
		if(delta < 0){
			
			if (whereIam == '#endDiv'){
				//do nothing
				$('html').mousewheel(wheelF);
			
			} else {
				navigateDown();
			}
	
		} else if (delta > 0){
			if (whereIam == '#homeDiv'){
				//do nothing
				$('html').mousewheel(wheelF);
			} else {
				navigateUp();
			}
		}
	}
	
																													/////
																												   /////
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////// NAVIGATE UP
	function navigateUp(){
		$(document).unbind('keydown');
		$('html').unbind('mousewheel');
		showHideEndFooter();
		pushWhereIveBeen(whereIam);
		scrollDir = 1;
		WhereV(scrollDir);
		hideRightNav();
		hideLeftNav();
		$('.contentDivs').fadeOut(200);
		//hideContentDivs();
		$(whereIam).stop().animate({
			top: theH + 'px'
			}, 1000, function(){
				$('html').mousewheel(wheelF);
				if (whereIam == '#homeDiv' || whereIam == '#endDiv' || whereIam == '#IDivThree' || whereIam == '#IIDivThree' || whereIam == '#IIIDivThree' || whereIam == '#IVDivThree'){
					hideRightNav();
				} else {
					displayRightNav();
				}
				if (whereIam == '#homeDiv' || whereIam == '#endDiv' || whereIam == '#IDiv' || whereIam == '#IIDiv' || whereIam == '#IIIDiv' || whereIam == '#IVDiv'){
					hideLeftNav();
				} else {
					displayLeftNav();
				}
		});
		
		$(whereImGoing).css({
			top: -(theH) + 'px',
			left: '0px'
		});
						
		   ///////////////////////////////////
		  //                               //
		 //   LOAD DYNAMIC CONTENT HERE   //
		//								 //
	   ///////////////////////////////////
	   				
		$(whereImGoing).stop().animate({
			top:'0px'
		},1000, function(){
			$('.contentDivs').fadeIn(600);
			bindKeydown();
		});
		
		whereIam = whereImGoing;
		showHideDemoDown();
	}
	
																													/////
																												   /////
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////// NAVIGATE DOWN
	function navigateDown(){
		$(document).unbind('keydown');
		$('html').unbind('mousewheel');
		showHideEndFooter();
		pushWhereIveBeen(whereIam);
		scrollDir = 0;
		WhereV(scrollDir);
		hideRightNav();
		hideLeftNav();
		$('.contentDivs').fadeOut(200);
		//hideContentDivs();
		$(whereIam).stop().animate({
			top:-(theH) + 'px'
			}, 1000, function(){
				$('html').mousewheel(wheelF);
				if (whereIam == '#homeDiv' || whereIam == '#endDiv' || whereIam == '#IDivThree' || whereIam == '#IIDivThree' || whereIam == '#IIIDivThree' || whereIam == '#IVDivThree'){
					hideRightNav();
				} else {
					displayRightNav();
				}
				if (whereIam == '#homeDiv' || whereIam == '#endDiv' || whereIam == '#IDiv' || whereIam == '#IIDiv' || whereIam == '#IIIDiv' || whereIam == '#IVDiv'){
					hideLeftNav();
				} else {
					displayLeftNav();
				}
		});
		
		$(whereImGoing).css({
			top: theH + 'px',
			left: '0px'
		});
		
		   ///////////////////////////////////
		  //                               //
		 //   LOAD DYNAMIC CONTENT HERE   //
		//								 //
	   ///////////////////////////////////
	
		$(whereImGoing).stop().animate({
			top: '0px'
		},1000, function(){
			$('.contentDivs').fadeIn(600);
			bindKeydown();
		});
		
		whereIam = whereImGoing;
		showHideDemoDown();
	}
	
																													/////
																												   /////
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////// NAVIGATE RIGHT
	function navigateRight(){
		pushWhereIveBeen(whereIam);
		navLR = 'r';
		WhereH();
		
		if(whereIam == '#IDivThree' || whereIam == '#IIDivThree' || whereIam == '#IIIDivThree' || whereIam == '#IVDivThree' || whereIam == '#endDiv'){
			bindKeydown();
		} else {
			
			hideRightNav();
			hideLeftNav();
			$('.contentDivs').fadeOut(200);
			//hideContentDivs();
			
			$(whereIam).animate({
				left: -(theW) + 'px'
			}, 1000);
			$(whereImGoing).css({
				top: '0px',
				left: theW + 'px'
			});
			
			
			   ///////////////////////////////////
			  //                               //
			 //   LOAD DYNAMIC CONTENT HERE   //
			//								 //
		   ///////////////////////////////////
			
		$(whereImGoing).animate({
				left: '0px'
			}, 1000, function(){
				if(whereImGoing == '#IDivThree' || whereImGoing == '#IIDivThree' || whereImGoing == '#IIIDivThree' || whereImGoing == '#IVDivThree'){
					displayLeftNav();
				} else {
					displayLeftNav();
					displayRightNav();
				}
				$('.contentDivs').fadeIn(600);
				bindKeydown();
			});
			whereIam = whereImGoing;
			showHideDemoDown();
		}
	}
	
																													/////
																												   /////
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////// NAVIGATE LEFT
	function navigateLeft(){
		pushWhereIveBeen(whereIam);	
		navLR = 'l';
		WhereH();
		
		if(whereIam == '#homeDiv' || whereIam == '#IDiv' || whereIam == '#IIDiv' || whereIam == '#IIIDiv' || whereIam == '#IVDiv' || whereIam == '#endDiv'){
			bindKeydown();
		} else {
			hideRightNav();
			hideLeftNav();
			$('.contentDivs').fadeOut(200);
			//hideContentDivs();
			
			$(whereIam).animate({
				left: theW + 'px'
			}, 1000);
			
			$(whereImGoing).css({
				top: '0px',
				left: -(theW) + 'px'
			});
				
				
				   ///////////////////////////////////
				  //                               //
				 //   LOAD DYNAMIC CONTENT HERE   //
				//								 //
			   ///////////////////////////////////
				
				
				
			$(whereImGoing).animate({
				left: '0px'
			}, 1000, function (){
				if (whereImGoing == '#IDiv' || whereImGoing == '#IIDiv' || whereImGoing == '#IIIDiv' || whereImGoing == '#IVDiv'){
					displayRightNav();
				} else {
					displayLeftNav();
					displayRightNav();
				}
				$('.contentDivs').fadeIn(600);
				bindKeydown();
			});
			whereIam = whereImGoing;
			showHideDemoDown();
		}
	}
	
																													/////
																												   /////
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////// VERTICAL WHERE
	function WhereV(n){
		switch (whereIam){
			case '#homeDiv':
				if (n == 0){
					whereImGoing = '#IDiv';
				} else {
					whereImGoing = '#IDiv';
				}
				break;
			case '#IDiv':
				if (n == 0){
					whereImGoing = '#IIDiv';
				} else {
					whereImGoing = '#homeDiv';
				}
				break;
			case '#IIDiv':
				if (n == 0){
					whereImGoing = '#IIIDiv';
				} else {
					whereImGoing = '#IDiv';
				}
				break;
			case '#IIIDiv':
				if (n == 0){
					whereImGoing = '#IVDiv';
				} else {
					whereImGoing = '#IIDiv';
				}
				break;
			case '#IVDiv':
				if (n == 0){
					whereImGoing = '#endDiv';
				} else {
					whereImGoing = '#IIIDiv';
				}
				break;
			case '#endDiv':
				if (n == 0){
					whereImGoing = '#IVDiv';
				} else {
					whereImGoing = '#IVDiv';
				}
				break;
			case '#IDivOne':
				if (n == 0){
					if (whereIveBeen[1] == '#IIDiv'){
						whereImGoing = '#IIDivOne';
					} else {
						whereImGoing = '#IIDiv';
					}
				} else {
					whereImGoing = '#homeDiv';
				}
				break;
			case '#IIDivOne':
				if (n == 0){
					if (whereIveBeen[2] == '#IIIDiv'){
						whereImGoing = '#IIIDivOne';
					} else {
						whereImGoing = '#IIIDiv';
					}
				} else {
					whereImGoing = '#IDivOne';
				}
				break;
			case '#IIIDivOne':
				if (n == 0){
					if (whereIveBeen[3] == '#IVDiv'){
						whereImGoing = '#IVDivOne';
					} else {
						whereImGoing = '#IVDiv';
					}
				} else {
					whereImGoing = '#IIDivOne';
				}
				break;
			case '#IVDivOne':
				if (n == 0){
					whereImGoing = '#endDiv';
				} else {
					whereImGoing = '#IIIDivOne';
				}
				break;
				case '#IDivTwo':
				if (n == 0){
					if (whereIveBeen[1] == '#IIDiv'){
						whereImGoing = '#IIDivTwo';
					} else {
						whereImGoing = '#IIDiv';
					}
				} else {
					whereImGoing = '#homeDiv';
				}
				break;
			case '#IIDivTwo':
				if (n == 0){
					if (whereIveBeen[2] == '#IIIDiv'){
						whereImGoing = '#IIIDivTwo';
					} else {
						whereImGoing = '#IIIDiv';
					}
				} else {
					whereImGoing = '#IDivTwo';
				}
				break;
			case '#IIIDivTwo':
				if (n == 0){
					if (whereIveBeen[3] == '#IVDiv'){
						whereImGoing = '#IVDivTwo';
					} else {
						whereImGoing = '#IVDiv';
					}
				} else {
					whereImGoing = '#IIDivTwo';
				}
				break;
			case '#IVDivTwo':
				if (n == 0){
					whereImGoing = '#endDiv';
				} else {
					whereImGoing = '#IIIDivTwo';
				}
				break;
				case '#IDivThree':
				if (n == 0){
					if (whereIveBeen[1] == '#IIDiv'){
						whereImGoing = '#IIDivThree';
					} else {
						whereImGoing = '#IIDiv';
					}
				} else {
					whereImGoing = '#homeDiv';
				}
				break;
			case '#IIDivThree':
				if (n == 0){
					if (whereIveBeen[2] == '#IIIDiv'){
						whereImGoing = '#IIIDivThree';
					} else {
						whereImGoing = '#IIIDiv';
					}
				} else {
					whereImGoing = '#IDivThree';
				}
				break;
			case '#IIIDivThree':
				if (n == 0){
					if (whereIveBeen[3] == '#IVDiv'){
						whereImGoing = '#IVDivThree';
					} else {
						whereImGoing = '#IVDiv';
					}
				} else {
					whereImGoing = '#IIDivThree';
				}
				break;
			case '#IVDivThree':
				if (n == 0){
					whereImGoing = '#endDiv';
				} else {
					whereImGoing = '#IIIDivThree';
				}
				break;
		}
	}
	
																													/////
																												   /////
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////// HORIZONTAL WHERE
	function WhereH(){
		switch (whereIam){
			case '#IDiv':
				whereImGoing = '#IDivOne';
				break;
			case '#IIDiv':
				whereImGoing = '#IIDivOne';
				break;
			case '#IIIDiv':
				whereImGoing = '#IIIDivOne';
				break;
			case '#IVDiv':
				whereImGoing = '#IVDivOne';
				break;
			case '#IDivOne':
				if (navLR == 'r'){
					whereImGoing = '#IDivTwo';
				} else {
					whereImGoing = '#IDiv';
				}
				break;
			case '#IIDivOne':
				if (navLR == 'r'){
					whereImGoing = '#IIDivTwo';
				} else {
					whereImGoing = '#IIDiv';
				}
				break;
			case '#IIIDivOne':
				if (navLR == 'r'){
					whereImGoing = '#IIIDivTwo';
				} else {
					whereImGoing = '#IIIDiv';
				}
				break;
			case '#IVDivOne':
				if (navLR == 'r'){
					whereImGoing = '#IVDivTwo';
				} else {
					whereImGoing = '#IVDiv';
				}
				break;
			case '#IDivTwo':
				if (navLR == 'r'){
					whereImGoing = '#IDivThree';
				} else {
					whereImGoing = '#IDivOne';
				}
				break;
			case '#IIDivTwo':
				if (navLR == 'r'){
					whereImGoing = '#IIDivThree';
				} else {
					whereImGoing = '#IIDivOne';
				}
				break;
			case '#IIIDivTwo':
				if (navLR == 'r'){
					whereImGoing = '#IIIDivThree';
				} else {
					whereImGoing = '#IIIDivOne';
				}
				break;
			case '#IVDivTwo':
				if (navLR == 'r'){
					whereImGoing = '#IVDivThree';
				} else {
					whereImGoing = '#IVDivOne';
				}
				break;
			case '#IDivThree':
				if (navLR == 'r'){
					whereImGoing = '#IDivTwo';
				} else {
					whereImGoing = '#IDivTwo';
				}
				break;
			case '#IIDivThree':
				if (navLR == 'r'){
					whereImGoing = '#IIDivTwo';
				} else {
					whereImGoing = '#IIDivTwo';
				}
				break;
			case '#IIIDivThree':
				if (navLR == 'r'){
					whereImGoing = '#IIIDivTwo';
				} else {
					whereImGoing = '#IIIDivTwo';
				}
				break;
			case '#IVDivThree':
				if (navLR == 'r'){
					whereImGoing = '#IVDivTwo';
				} else {
					whereImGoing = '#IVDivTwo';
				}
				break;
		}
	}
});