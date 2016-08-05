$(document).ready(function(){

	$("#stateData").load("states.svg", function (){
		
		var originalColor;
		
		$("#rangeContainer").html("<input id='rangeSlider' type='range' min='0' max=" + dateArr.length + " value=" + dateArr.length + " />");
		
		var rangeValue = document.getElementById("rangeSlider").value;
		$("#infoBox").text(dateArr[rangeValue]);
		
		$(".stateObj").mouseover(function(){
			//$("#rateDisplay").text(dataArr[dataArr.indexOf(this.id)][rangeValue]);
			//$("#rateDisplay").text((dataArr[dataArr.indexOf(this.id)]).toString());
			
			//alert(dataArr[dataArr.indexOf(this.id)][1][rangeValue - 1]);
			//alert(dataArr[dataArr.indexOf("US")][1][rangeValue - 1]);
			
			$("#infoBox").text(this.id);
			originalColor = $(this).css("fill");
			$(this).css("fill","#cccccc");
		});
		
		$(".stateObj").mouseout(function(){
			$(this).css("fill",originalColor);
		});
		
		$("#rangeSlider").change(function(){
			rangeValue = document.getElementById("rangeSlider").value;
			$("#infoBox").text(dateArr[rangeValue]);
			colorStates();
		});
			
		var colorArr = new Array();
		
		colorArr = ["#ff0000", "#ff6600", "#ff9900", "#ffcc00", "#ffff00", "#99ff00", "#00ff00", "#00cc00"];
		
		$(".scalePieces").each(function(i){
			$(this).css("background-color", colorArr[i]);
		});
		
		var colorValueFromData;
		
		colorStates();
		
		$(".stateObj").each(function(i){
			$(this).css("stroke", "#666666");
		});
		
		function colorStates(){
			
			$(".stateObj").each(function(i){
			
				colorValueFromData = dataArr[i][1][rangeValue - 1];
				
				if ((colorValueFromData >= 2) && (colorValueFromData <= 3.99)){
					$(this).css("fill", colorArr[0]);
				
				} else if ((colorValueFromData >= 4) && (colorValueFromData <= 5.99)){
					$(this).css("fill", colorArr[1]);
				
				} else if ((colorValueFromData >= 6) && (colorValueFromData <= 7.99)){
					$(this).css("fill", colorArr[2]);
				
				} else if ((colorValueFromData >= 8) && (colorValueFromData <= 9.99)){
					$(this).css("fill", colorArr[3]);
				
				} else if ((colorValueFromData >= 10) && (colorValueFromData <= 11.99)){
					$(this).css("fill", colorArr[4]);
				
				} else if ((colorValueFromData >= 12) && (colorValueFromData <= 13.99)){
					$(this).css("fill", colorArr[5]);
				
				} else if ((colorValueFromData >= 14) && (colorValueFromData <= 15.99)){
					$(this).css("fill", colorArr[6]);
				
				} else if (colorValueFromData >= 16){
					$(this).css("fill", colorArr[7]);
				}
				
			});
		}
	});	
});