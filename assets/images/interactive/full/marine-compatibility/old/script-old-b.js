var result, color, circle, clip, theG, circleY, rReverseCounter, rReverse, yReverseCounter, yReverse, cReverseCounter, cReverse, drawCount = 0, radiusArray = [], radiusCounter;
var lineHeight = 22;
			
$(document).ready(function(){

d3.json("compatibility.json", function(error, json) {
	if (error) return console.warn(error);
	result = json;

	color = d3.scale.ordinal().domain([0,1,2]).range(['#b0e1b7','#ffe2d6','#E0a0a0']);

	//console.log(color(result[2].compat[4]) + "		CORRECT");
	
	var svg = d3.select("body").append("svg")
					.attr("width", 600)
					.attr("height", 870);
	
	var textDivs = svg.selectAll("div")
						.data(result)
						.enter()
						.append("foreignObject")
						.attr("width", 154)
						.attr("height", 30)
						.attr("y", function(d,i){ return lineHeight * ( i + 1 ); })
						.append("xhtml:div")
						.style("font", "14px 'Helvetica Neue'")
						.html(function(d){ return d.type; })
						.attr("id", function(d){ return d.id; })
						.attr("x", 150)
						.on("mouseover", function(){ d3.select("#" + this.id).transition().style("font-weight", "bold"); draw(this); if (drawCount == 0) { textDivs.style("background-color", "white"); drawCount = 1; } })
						.on("mouseout", function(){ d3.select("#" + this.id).transition().style("font-weight", "normal"); undraw(this); });				

	function draw(theHoveredOne){

		var hoveredOneIndex = result.length;

		while(hoveredOneIndex--) {
			if(result[hoveredOneIndex].id === theHoveredOne.id) break;
		}
		
		textDivs.style("background-color", function (d,i){ return color(result[i].compat[hoveredOneIndex]); });

		clip = svg.append("clipPath")
					.attr("id", "chart-area")
					.append("rect")
					.attr("x", 154)
					.attr("y", 0)
					.attr("width", 500)
					.attr("height", 870);
			
		theG = svg.append("g")
					.attr("id", "circles")
					.attr("clip-path", "url(#chart-area)");
		
		rReverseCounter = result.length;
		yReverseCounter = result.length;
		cReverseCounter = result.length;
		
		rReverse = rReverseCounter - 1;
		
		radiusArray = [];
		
		for (var z = rReverseCounter; z > hoveredOneIndex; z--){
			radiusArray.push((Math.abs(hoveredOneIndex - rReverse) * (lineHeight / 2))) + (lineHeight / 2);
			rReverse = rReverseCounter - 1;
			rReverseCounter = rReverseCounter - 1;
		}
		
		radiusArray.push(0);
		radiusArray.shift();
		//radiusArray.shift();
		//radiusArray.unshift(0);
		radiusArray.reverse();
		
		radiusCounter = result.length - hoveredOneIndex;
		
		//show(radiusCounter);
		
		circle = theG.selectAll("circle")
						.data(result)
						.enter()
						.append("circle")
						//.attr("r", function (d,i){ return ((Math.abs(hoveredOneIndex - i) * (lineHeight / 2))) + 11; })
						/*.attr("r", function (d,i){ 
							if (hoveredOneIndex > i){
								return ((Math.abs(hoveredOneIndex - i) * (lineHeight / 2))) + (lineHeight / 2);
							} else if (hoveredOneIndex <= i){
								rReverse = rReverseCounter - 1;
								rReverseCounter = rReverseCounter - 1;
								show((Math.abs(hoveredOneIndex - rReverse) * (lineHeight / 2))) + (lineHeight / 2);
								return ((Math.abs(hoveredOneIndex - rReverse) * (lineHeight / 2))) + (lineHeight / 2);
							}
						})*/
						.attr("r", function (d,i){
							if (hoveredOneIndex > i){
								return ((Math.abs((hoveredOneIndex - 1) - i) * (lineHeight / 2))) + lineHeight - 5.5;
							} else if (hoveredOneIndex <= i){
								radiusCounter = radiusCounter - 1;
								return (radiusArray[radiusCounter + 1]) + lineHeight / 4;
							}
						})
						.attr("cx", 154)
						.attr("cy", function (d,i){
							if(hoveredOneIndex > i){
								return ((hoveredOneIndex + 1 + i) * lineHeight / 2 + lineHeight - lineHeight / 4);
							} else if (hoveredOneIndex <= i) {
								yReverse = yReverseCounter - 1;
								yReverseCounter = yReverseCounter - 1;
								//show(i * lineHeight + lineHeight/2);
								return ((hoveredOneIndex * lineHeight) + ((yReverse - hoveredOneIndex) * lineHeight / 2) + (lineHeight * 2 + lineHeight / 2)) - lineHeight / 4;
								
								//return ((hoveredOneIndex + 1) * lineHeight) * 2;
								/*if (hoveredOneIndex < 19){
									return (yReverse * lineHeight) - ((yReverse * (lineHeight / 2) - hoveredOneIndex)) + ((lineHeight * lineHeight / 2) - (Math.abs(19-hoveredOneIndex) * lineHeight / 2));
								} else {
									return (yReverse * lineHeight) - ((yReverse * (lineHeight / 2) - hoveredOneIndex)) + ((lineHeight * lineHeight / 2) + (Math.abs(19-hoveredOneIndex) * lineHeight / 2));
								}*/
								//return (hoveredOneIndex * lineHeight - (hoveredOneIndex - i - 1) * (lineHeight / 2)) + lineHeight;
							}
						})
						//.attr("stroke", "gray")
						//.attr("stroke-width", 1)
						//.attr("fill", "none");
						//.attr("opacity", .3)
						//.attr("fill", function (d,i){ return color(result[i].compat[hoveredOneIndex]); });
						.attr("fill", function (d,i){
							cReverse = cReverseCounter - 1;
							cReverseCounter = cReverseCounter - 1;	
							if (hoveredOneIndex > i){
								return color(result[i].compat[hoveredOneIndex]);
							} else if (hoveredOneIndex <= i){
								//show(cReverse+hoveredOneIndex);
								return color(result[hoveredOneIndex].compat[(cReverse+hoveredOneIndex)+1]);
							}
						})
	}
	
	function undraw(theHoveredOne){
		circle.remove();
		theG.remove();
		$("#chart-area").remove();
		//textDivs.style("background-color", "white");
	}
	
	function show(thingToShow){
		console.log(thingToShow);
	}
	
	console.log("• • • • • • • • • • • • • • • • •  • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • ");
});
});