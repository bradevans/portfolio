$(document).ready(function(){

	/*$("#submitter").click(function(){
		alert("hey");
	});
	
	function formValidation(theForm){
		alert("This shit ain't valid!");
		return false;
		
		//theForm.submit();
	}*/

	function setContentHeight(){
		var contentHeight = $('#content').height();
		$('#site').height(contentHeight + 400);
		$('#footText').css('bottom', 155);
		$('#bckgrndImage').css('bottom', -60);
		$('#bckgrndImage').css('left', -300);
	}
	
	getHomeData();
	
	function getHomeData(){
		
		$.get("assets/html/content-home.html", function(data){
			$('#content').html("<br><br><br><br><br><br><br><br>" + data);
			$('#myGallery').galleryView({
				transition_interval: 6000,
				show_panels: true,
				show_panel_nav: false,
				panel_width: 610,
				panel_height: 350,
				panel_animation: 'slide',
				show_filmstrip: false,
				show_filmstrip_nav: false,
				autoplay: true,
				show_infobar: false,
			});
			setContentHeight();
		});
	}
	
	function getPlatformData(){
		$.get("assets/html/content-platform.html", function(data){
			$('#content').html('<br><br><br><br><br><br><br><br>' + data);
			setContentHeight();
		});
	}
	
	function getEndorsementsData(){
		$.get("assets/html/content-endorsements.html", function(data){
			$('#content').html('<br><br><br><br><br><br><br><br>' + data);
			setContentHeight();
		});
	}
	
	function getPressData(){
		$.get("assets/html/content-press.html", function(data){
			$('#content').html('<br><br><br><br><br><br><br><br>' + data);
			setContentHeight();
		});
	}
	
	function getDonateData(){
		$.get("assets/html/content-donate.html", function(data){
			$('#content').html('<br><br><br><br><br><br><br><br>' + data);
			setContentHeight();
		});
	}
	
	$("a.nav").click(function(){
		
		switch($(this).attr('id')){
			
			case "home":
			$('#home').css('backgroundPosition', '-150px 0px');
			$('#platform').css('backgroundPosition', '0px -150px');
			$('#endorsements').css('backgroundPosition', '0px -300px');
			$('#press').css('backgroundPosition', '0px -450px');
			getHomeData();
			break;
			
			case "platform":
			$('#home').css('backgroundPosition', '0px 0px');
			$('#platform').css('backgroundPosition', '-150px -150px');
			$('#endorsements').css('backgroundPosition', '0px -300px');
			$('#press').css('backgroundPosition', '0px -450px');
			getPlatformData();
			break;
			
			case "endorsements":
			$('#home').css('backgroundPosition', '0px 0px');
			$('#platform').css('backgroundPosition', '0px -150px');
			$('#endorsements').css('backgroundPosition', '-150px -300px');
			$('#press').css('backgroundPosition', '0px -450px');
			getEndorsementsData();
			break;
			
			case "press":
			$('#home').css('backgroundPosition', '0px 0px');
			$('#platform').css('backgroundPosition', '0px -150px');
			$('#endorsements').css('backgroundPosition', '0px -300px');
			$('#press').css('backgroundPosition', '-150px -450px');
			getPressData();
			break;
			
			case "donate":
			$('#home').css('backgroundPosition', '0px 0px');
			$('#platform').css('backgroundPosition', '0px -150px');
			$('#endorsements').css('backgroundPosition', '0px -300px');
			$('#press').css('backgroundPosition', '-150px -450px');
			getDonateData();
			break;
		}
	});
	
		$("#pp").click(function(){
			$('#home').css('backgroundPosition', '0px 0px');
			$('#platform').css('backgroundPosition', '0px -150px');
			$('#endorsements').css('backgroundPosition', '0px -300px');
			$('#press').css('backgroundPosition', '-150px -450px');
			//getDonateData();
		});
		
});