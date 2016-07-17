var result, color, circle, clip, theG, circleY, rReverseCounter, rReverse, yReverseCounter, yReverse, cReverseCounter, cReverse, radiusArray = [], radiusCounter;
var lineHeight = 22;
			
$(document).ready(function(){

d3.json("compatibility.json", function(error, json) {
	if (error) return console.warn(error);
	result = json;
	
	var colorsSVG = d3.select("#colors").append("svg:svg").attr("width", 240).attr("height", 200);
	
	colorsSVG.append("circle").attr("r", 15).attr("cy", 45).attr("cx", 220).attr("fill", "#b0e1b7");
	colorsSVG.append("circle").attr("r", 15).attr("cy", 81).attr("cx", 220).attr("fill", "#ffe2d6");
	colorsSVG.append("circle").attr("r", 15).attr("cy", 117).attr("cx", 220).attr("fill", "#E0a0a0");

	color = d3.scale.ordinal().domain([0,1,2]).range(['#b0e1b7','#ffe2d6','#E0a0a0']);
	
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
						.on("mouseover", function(){ d3.select("#" + this.id).style("font-weight", "bold"); draw(this); })
						.on("mouseout", function(){ d3.select("#" + this.id).style("font-weight", "normal"); undraw(this); });				

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
		radiusArray.reverse();
		
		radiusCounter = result.length - hoveredOneIndex;
		
		circle = theG.selectAll("circle")
						.data(result)
						.enter()
						.append("circle")
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
								return ((hoveredOneIndex * lineHeight) + ((yReverse - hoveredOneIndex) * lineHeight / 2) + (lineHeight * 2 + lineHeight / 2)) - lineHeight / 4;
							}
						})
						.attr("fill", function (d,i){
							cReverse = cReverseCounter - 1;
							cReverseCounter = cReverseCounter - 1;	
							if (hoveredOneIndex > i){
								return color(result[i].compat[hoveredOneIndex]);
							} else if (hoveredOneIndex <= i){
								return color(result[hoveredOneIndex].compat[(cReverse+hoveredOneIndex)+1]);
							}
						})
	}
	
	function undraw(theHoveredOne){
		circle.remove();
		theG.remove();
		$("#chart-area").remove();
		textDivs.style("background-color", "white");
	}
	
	function show(thingToShow){
		console.log(thingToShow);
	}
	
	console.log("• • • • • • • • • • • • • • • • •  • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • ");
});
});