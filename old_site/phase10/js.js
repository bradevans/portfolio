var numberOfPlayers;
var playerArray = new Array();
var phaseToggle = 0;

var p1score, p2score, p3score, p4score, p5score, p6score, p1oldScore, p2oldScore, p3oldScore, p4oldScore, p5oldScore, p6oldScore;

function select2players(){
	document.getElementById("player1entry").style.display = "block";
	document.getElementById("player2entry").style.display = "block";
	document.getElementById("player3entry").style.display = "none";
	document.getElementById("player4entry").style.display = "none";
	document.getElementById("player5entry").style.display = "none";
	document.getElementById("player6entry").style.display = "none";
	
	document.getElementById("playerentrypage").style.display = "block";
	document.getElementById("numberOfPlayersButtons").style.display = "none";
	document.getElementById("numberOfPlayersQuestion").style.display = "none";
	
	numberOfPlayers = 2;
}

function select3players(){
	document.getElementById("player1entry").style.display = "block";
	document.getElementById("player2entry").style.display = "block";
	document.getElementById("player3entry").style.display = "block";
	document.getElementById("player4entry").style.display = "none";
	document.getElementById("player5entry").style.display = "none";
	document.getElementById("player6entry").style.display = "none";
		
	document.getElementById("playerentrypage").style.display = "block";
	document.getElementById("numberOfPlayersButtons").style.display = "none";
	document.getElementById("numberOfPlayersQuestion").style.display = "none";
	
	numberOfPlayers = 3;
}

function select4players(){
	document.getElementById("player1entry").style.display = "block";
	document.getElementById("player2entry").style.display = "block";
	document.getElementById("player3entry").style.display = "block";
	document.getElementById("player4entry").style.display = "block";
	document.getElementById("player5entry").style.display = "none";
	document.getElementById("player6entry").style.display = "none";
	
	document.getElementById("playerentrypage").style.display = "block";
	document.getElementById("numberOfPlayersButtons").style.display = "none";
	document.getElementById("numberOfPlayersQuestion").style.display = "none";
	
	numberOfPlayers = 4;
}

function select5players(){
	document.getElementById("player1entry").style.display = "block";
	document.getElementById("player2entry").style.display = "block";
	document.getElementById("player3entry").style.display = "block";
	document.getElementById("player4entry").style.display = "block";
	document.getElementById("player5entry").style.display = "block";
	document.getElementById("player6entry").style.display = "none";
	
	document.getElementById("playerentrypage").style.display = "block";
	document.getElementById("numberOfPlayersButtons").style.display = "none";
	document.getElementById("numberOfPlayersQuestion").style.display = "none";
	
	numberOfPlayers = 5;
}

function select6players(){
	document.getElementById("player1entry").style.display = "block";
	document.getElementById("player2entry").style.display = "block";
	document.getElementById("player3entry").style.display = "block";
	document.getElementById("player4entry").style.display = "block";
	document.getElementById("player5entry").style.display = "block";
	document.getElementById("player6entry").style.display = "block";

	document.getElementById("playerentrypage").style.display = "block";
	document.getElementById("numberOfPlayersButtons").style.display = "none";
	document.getElementById("numberOfPlayersQuestion").style.display = "none";
	
	numberOfPlayers = 6;
}

function deleteContents(id){
	document.getElementById(id).value = "";
}

function increasep1Score(){

	document.getElementById("increasep1ScoreDiv").style.display = "block";
	document.getElementById('hideOnScore').style.display = "none";
	
	document.getElementById("p1ScoreIncreaseInfo").focus();
	
	document.getElementById("p1ScoreIncreaseInfo").value = "";
	
	p1oldScore = document.getElementById("p1scoreInput").value;
}

function submitp1Score(){

	document.getElementById("increasep1ScoreDiv").style.display = "none";
	document.getElementById('hideOnScore').style.display = "block";
	
	p1score = document.getElementById("p1ScoreIncreaseInfo").value;
	
	document.getElementById("p1scoreInput").value = parseInt(p1score) + parseInt(p1oldScore);
	
	setTimeout(function() { window.scrollTo(0, 1) }, 100);
}

function increasep2Score(){

	document.getElementById("increasep2ScoreDiv").style.display = "block";
	document.getElementById('hideOnScore').style.display = "none";
	
	document.getElementById("p2ScoreIncreaseInfo").focus();
	
	document.getElementById("p2ScoreIncreaseInfo").value = ""
	
	p2oldScore = document.getElementById("p2scoreInput").value;
}

function submitp2Score(){

	document.getElementById("increasep2ScoreDiv").style.display = "none";
	document.getElementById('hideOnScore').style.display = "block";
	
	p2score = document.getElementById("p2ScoreIncreaseInfo").value;
	
	document.getElementById("p2scoreInput").value = parseInt(p2score) + parseInt(p2oldScore);
	
	setTimeout(function() { window.scrollTo(0, 1) }, 100);
}

function increasep3Score(){

	document.getElementById("increasep3ScoreDiv").style.display = "block";
	document.getElementById('hideOnScore').style.display = "none";
	
	document.getElementById("p3ScoreIncreaseInfo").focus();
	
	document.getElementById("p3ScoreIncreaseInfo").value = ""
	
	p3oldScore = document.getElementById("p3scoreInput").value;
}

function submitp3Score(){

	document.getElementById("increasep3ScoreDiv").style.display = "none";
	document.getElementById('hideOnScore').style.display = "block";
	
	p3score = document.getElementById("p3ScoreIncreaseInfo").value;
	
	document.getElementById("p3scoreInput").value = parseInt(p3score) + parseInt(p3oldScore);
	
	setTimeout(function() { window.scrollTo(0, 1) }, 100);
}

function increasep4Score(){

	document.getElementById("increasep4ScoreDiv").style.display = "block";
	document.getElementById('hideOnScore').style.display = "none";
	
	document.getElementById("p4ScoreIncreaseInfo").focus();
	
	document.getElementById("p4ScoreIncreaseInfo").value = ""
	
	p4oldScore = document.getElementById("p4scoreInput").value;
}

function submitp4Score(){

	document.getElementById("increasep4ScoreDiv").style.display = "none";
	document.getElementById('hideOnScore').style.display = "block";
	
	p4score = document.getElementById("p4ScoreIncreaseInfo").value;
	
	document.getElementById("p4scoreInput").value = parseInt(p4score) + parseInt(p4oldScore);
	
	setTimeout(function() { window.scrollTo(0, 1) }, 100);
}

function increasep5Score(){

	document.getElementById("increasep5ScoreDiv").style.display = "block";
	document.getElementById('hideOnScore').style.display = "none";
	
	document.getElementById("p5ScoreIncreaseInfo").focus();
	
	document.getElementById("p5ScoreIncreaseInfo").value = ""
	
	p5oldScore = document.getElementById("p5scoreInput").value;
}

function submitp5Score(){

	document.getElementById("increasep5ScoreDiv").style.display = "none";
	document.getElementById('hideOnScore').style.display = "block";
	
	p5score = document.getElementById("p5ScoreIncreaseInfo").value;
	
	document.getElementById("p5scoreInput").value = parseInt(p5score) + parseInt(p5oldScore);
	
	setTimeout(function() { window.scrollTo(0, 1) }, 100);
}
function increasep6Score(){

	document.getElementById("increasep6ScoreDiv").style.display = "block";
	document.getElementById('hideOnScore').style.display = "none";
	
	document.getElementById("p6ScoreIncreaseInfo").focus();
	
	document.getElementById("p6ScoreIncreaseInfo").value = ""
	
	p6oldScore = document.getElementById("p6scoreInput").value;
}

function submitp6Score(){

	document.getElementById("increasep6ScoreDiv").style.display = "none";
	document.getElementById('hideOnScore').style.display = "block";
	
	p6score = document.getElementById("p6ScoreIncreaseInfo").value;
	
	document.getElementById("p6scoreInput").value = parseInt(p6score) + parseInt(p6oldScore);
	
	setTimeout(function() { window.scrollTo(0, 1) }, 100);
}

function keepScore(){
	document.getElementById('playerentrypage').style.display = "none";
	document.getElementById('gameplay').style.display = "block";
	document.getElementById('hideBckgrnd').style.display = "block";
	document.getElementById("playerHeader").style.display = "block";
	document.getElementById("phaseHeader").style.display = "block";
	document.getElementById("scoreHeader").style.display = "block";
	
	for (var i = 0; i < numberOfPlayers; i++){
		playerArray[i] = document.getElementById("player" + (i+1) + "input").value;
		
		document.getElementById("p" + (i+1) + "name").textContent = playerArray[i];
		
		document.getElementById("p" + (i+1) + "name").style.display = "block";
		document.getElementById("p" + (i+1) + "phase").style.display = "block";
		document.getElementById("p" + (i+1) + "score").style.display = "block";
	}
}

function togglePhaseInfo(){
	
	if (phaseToggle == 0){
	
		document.getElementById("hideShowPhaseInfo").innerHTML = "Hide"
		document.getElementById("phaseinfo").style.display = "block";
		document.getElementById('submitPlayerNames').style.display = "none";
		document.getElementById('gameplay').style.display = "none";
		
		for(var i = 0; i < numberOfPlayers; ++i){
			document.getElementById("player" + (i+1) + "input").style.display = "none";
		}
		
		phaseToggle = 1;
		
	} else if(phaseToggle == 1) {
	
		document.getElementById("hideShowPhaseInfo").innerHTML = "Phases"
		document.getElementById("phaseinfo").style.display = "none";
		document.getElementById('submitPlayerNames').style.display = "block";
		document.getElementById('gameplay').style.display = "block";

		
		for(var i = 0; i < numberOfPlayers; ++i){
			document.getElementById("player" + (i+1) + "input").style.display = "block";
		}
	
		phaseToggle = 0;
	}
}

function showPlayerEntryPage_HidingChildren(){
	document.getElementById('playerentrypage').style.display = "block";
	document.getElementById('player1entry').style.display = "none";
	document.getElementById('player2entry').style.display = "none";
	document.getElementById('player3entry').style.display = "none";
	document.getElementById('player4entry').style.display = "none";
	document.getElementById('player5entry').style.display = "none";
	document.getElementById('player6entry').style.display = "none";
}

function increasep1Phase(){
	document.getElementById("p1phaseInput").value++;
}

function increasep2Phase(){
	document.getElementById("p2phaseInput").value++;
}

function increasep3Phase(){
	document.getElementById("p3phaseInput").value++;
}

function increasep4Phase(){
	document.getElementById("p4phaseInput").value++;
}

function increasep5Phase(){
	document.getElementById("p5phaseInput").value++;
}

function increasep6Phase(){
	document.getElementById("p6phaseInput").value++;
}