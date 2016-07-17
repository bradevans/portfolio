function overContact(){
	document.contact.src="assets/contactInactive.png"
}

function overPress(){
	document.press.src="assets/pressInactive.png"
}

function overEndorsements(){
	document.endorsements.src="assets/endorsementsInactive.png"
}

function overPlatform(){
	document.platform.src="assets/platformInactive.png"
}

function overHome(){
	document.home.src="assets/homeInactive.png"
}

function outContact(){
	document.contact.src="assets/contactActive.png"
}

function outPress(){
	document.press.src="assets/pressActive.png"
}

function outEndorsements(){
	document.endorsements.src="assets/endorsementsActive.png"
}

function outPlatform(){
	document.platform.src="assets/platformActive.png"
}

function outHome(){
	document.home.src="assets/homeActive.png"
}

function overJoin(){
	document.join.src="assets/joinActive.png"
}

function outJoin(){
	document.join.src="assets/joinInactive.png"
}

function joinClick(){
	if (document.signUpForm.signUpTextArea.value == "Join us!"){
		
		alert("Please fill in your email address.");
		
	}else{
		
		var email = "friendsofespinal@gmail.com";
		var subject = "I'd like to join the Friends of Espinal mailing list!";
		var body_message = "Please sign me up to the Friends of Espinal mailing list.%0A%0AMy email address is: "+document.signUpForm.signUpTextArea.value;
		var mailto_link = 'mailto:'+email+'?subject='+subject+'&body='+body_message;

		window.open(mailto_link,'emailWindow');
	}
}