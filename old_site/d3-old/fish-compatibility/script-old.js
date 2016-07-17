var result, currentRad, color, circle, clip, theG;
var lineHeight = 22;
			
$(document).ready(function(){

d3.json("compatibility.json", function(error, json) {
	if (error) return console.warn(error);
	result = json;
	
	color = d3.scale.ordinal().domain([0,1,2]).range(['green','gray','red']);

	//console.log(color(result[2].compat[4]) + "		CORRECT");
	
	var svg = d3.select("body").append("svg")
					.attr("width", 600)
					.attr("height", 850);
	
	var textDivs = svg.selectAll("div")
						.data(result)
						.enter()
						.append("foreignObject")
						.attr("width", 154)
						.attr("height", 30)
						.attr("y", function(d,i){ return lineHeight * ( i + 1 ); })
						.append("xhtml:div")
						//.attr("height", lineHeight + "px")
						.style("font", "14px 'Helvetica Neue'")
						.html(function(d){ return d.type; })
						//.append("div")
						//.text(function(d){ return d.type; })
						.attr("id", function(d){ return d.type; })
						//.attr("text-align", "right")
						.attr("x", 150)
						.on("mouseover", function(){ draw(this.id) })
						.on("mouseout", function(){ undraw(); });
						//.attr("y", function(d,i){ return lineHeight * ( i + 1 ); });
	
	/*textDivs = svg.selectAll("text")
					.data(result)
					.enter()
				.append("text")
					.text(function(d){ return d.type; })
					.attr("id", function(d){ return d.type; })
					.attr("text-anchor", "end")
					.attr("x", 150)
					.on("mouseover", function(){ draw(this.id) })
					.on("mouseout", function(){ undraw(); })
					.attr("y", function(d,i){ return lineHeight * ( i + 1 ); });*/
					
	function draw(theHoveredOne){
	
		var hoveredOneIndex = result.length;
		
		while(hoveredOneIndex--) {
			if(result[hoveredOneIndex].type === theHoveredOne) break;
		}

		clip = svg.append("clipPath")
					.attr("id", "chart-area")
					.append("rect")
					.attr("x", 154)
					.attr("y", 0)
					.attr("width", 500)
					.attr("height", 850);
			
		theG = svg.append("g")
					.attr("id", "circles")
					.attr("clip-path", "url(#chart-area)");
	
		circle = theG.selectAll("circle")
						.data(result)
						.enter()
						.append("circle")
						.attr("r", function (d,i){ return (lineHeight * i / 2); })
						.attr("cx", 154)
						.attr("cy", function (d,i){ return ((lineHeight * i) + (lineHeight * .75) - (lineHeight / 2 * i)) + lineHeight - 4; })
						.attr("stroke", function (d,i){ /*logColor(color(result[3].compat[1]));*/ return color(result[i].compat[hoveredOneIndex]); })
						.attr("stroke-width", 3)
						.attr("fill", "none");
	}
	
	function undraw(){
		circle.remove();
		theG.remove();
		$("#chart-area").remove();
	}
	
	function logColor(it){
		console.log("IT: " + it);
	}
	
	
	console.log("• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • ");
});
});