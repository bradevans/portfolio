var allData = new Array();
var stateID = ["hawaii", "alaska", "michigan", "florida", "louisiana", "arkansas", "south carolina", "georgia", "mississippi", "alabama", "new mexico", "texas", "tennessee", "north carolina", "oklahoma", "arizona", "missouri", "virginia", "kansas", "kentucky", "colorado", "maryland", "west virginia", "delaware", "dc", "illinois", "ohio", "california", "utah", "nevada", "indiana", "new jersey", "rhode island", "connecticut", "pennsylvania", "new york", "nebraska", "massachusetts", "iowa", "new hampshire", "oregon", "minnesota", "vermont", "idaho", "wisconsin", "wyoming", "south dakota", "north dakota", "maine", "montana", "washington"];
var stateX = [0.0, 84.9599609375, 413.4267578125, 479.5009765625, 385.373046875, 374.2978515625, 528.96484375, 497.9580078125, 421.177734375, 462.8896484375, 172.01513671875, 207.08203125, 434.09765625, 514.9384765625, 262.45263671875, 93.390625, 356.2109375, 518.9970703125, 275.37158203125, 443.326171875, 182.72021484375, 562.1865234375, 527.48828125, 607.958984375, 594.6689453125, 410.10546875, 490.205078125, 0.0, 117.38427734375, 47.98681640625, 456.615234375, 610.1728515625, 644.87109375, 624.9384765625, 541.146484375, 549.2666015625, 252.8544921875, 623.8310546875, 344.3994140625, 630.1064453125, 8.85888671875, 335.1708984375, 611.6494140625, 95.9736328125, 386.48046875, 165.73974609375, 254.7001953125, 257.6533203125, 635.2744140625, 127.3505859375, 32.48388671875];
var stateY =[337.73193359375, 379.20654296875, 41.34326171875, 346.61669921875, 324.47021484375, 259.50146484375, 266.51513671875, 274.26708984375, 283.86474609375, 279.80419921875, 248.42724609375, 263.56201171875, 241.78271484375, 226.279296875, 254.33349609375, 239.56787109375, 184.9365234375, 181.2451171875, 198.96337890625, 201.91650390625, 174.6005859375, 169.0634765625, 165.37255859375, 166.1103515625, 186.04345703125, 145.439453125, 141.009765625, 121.814453125, 148.0234375, 134.365234375, 153.9287109375, 136.2109375, 113.32421875, 114.80078125, 126.61279296875, 66.4443359375, 142.48583984375, 95.97509765625, 131.04296875, 53.8935546875, 46.8798828125, 24.7314453125, 60.1689453125, 13.658203125, 66.4443359375, 97.8203125, 87.853515625, 31.00732421875, 7.38232421875, 15.873046875, 0.0];

$(document).ready(function(){
	
	/*$.ajax({
	url : "unemployment_static_data.txt",
		success : function (data) {
			$("#allDataDiv").html(data);
		}
	});

	allData = $("#allDataDiv").text;*/
	
	for (var i = 0; i < 51; ++i){
		$('#allStates').append("<img id=" + stateID[i] + " src='states_PNG/" + stateID[i] + ".png' style='position:absolute; top:" + stateY[i] + "px; left:" + stateX[i] + "px;' />");
		$('#' + stateID[i]).click(function() {
  			alert(this.id);
		});
	}

});