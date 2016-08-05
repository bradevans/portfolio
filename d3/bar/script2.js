var data = [], dataLength = 15, x, y, svg, width = 600, height = 400, bar, barW, barPad = 3, xAxis, yAxis, svgPad = 25, min = 10, max = 99, transparencyToggle = 0, slider, minimum = 0, maximum = 99;;
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
var ordinalAlpha = [];




//          want ability to change dataLength, re-sort values




$(document).ready(function(){

createData();	
initialize();

d3.select("#randomize").on("click", function() { randomize(); });
d3.select("#transparency").on("click", function() { transparency(); });
d3.select("#ascending").on("click", function() { ascending(); });
d3.select("#descending").on("click", function() { descending(); });

$("#slider").slider({ range: "min", value: dataLength, min: 5, max: 25 });
$("#slider").on("slidechange", function( event, ui ) { dataLength = ui.value; changeDataLength(); } );
  
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function createData(){
	for (var loop = 0; loop < dataLength; loop++){
		data.push({
			key: loop,
			value: getRandomInt(min, max)
		});
		ordinalAlpha.push(alphabet[loop]);
	}
	
	for(var ii = 0; ii < dataLength; ii++){
		if (maximum < data[ii].value){
			maximum = data[ii].value;
		}
		if (minimum > data[ii].value){
			minimum = data[ii].value;
		}		
	}
}
	


function randomize(){
	data = [];
	ordinalAlpha = [];
	createData();
	redraw();
}

function ascending(){
	svg.selectAll("rect").sort(function (a,b){ return a - b ;});
}

function descending(){
	svg.selectAll("rect").sort();
}

function transparency(){
	if (transparencyToggle == 0){
		transparencyToggle = 1;
		svg.selectAll("rect")
		.data(data)
		.transition()
		.duration(500)
		.attr("fill", function(d){ return "rgba(76,134,255,1)"; });
	} else {
		transparencyToggle = 0;
		svg.selectAll("rect")
		.data(data)
		.transition()
		.duration(500)
		.attr("fill", function(d){ return "rgba(76,134,255," + d.value / 100  + ")"; });
	}
}

function changeDataLength(){
	data = [];
	ordinalAlpha = [];
	createData();
	
	y.domain([0,maximum]);
	x.domain(ordinalAlpha);
	
	barW = (width - svgPad) / dataLength - barPad;

	bars = svg.selectAll("g")
		.data(data);
		
	bars.enter()
		.append("rect")
		.attr("height", function(d,i) { return (height - y(d.value)) - svgPad; })
		.attr("width", barW)
		.attr("y", function(d) { return y(d.value); })
		.attr("x", width)
		.attr("stroke", "rgba(76,134,255,1)")
		.attr("stroke-width", .4);
		
	bars.select("rect")
		.transition()
		.duration(1000)
		.attr("height", function(d) { return (height - y(d.value)) - svgPad; })
		.attr("width", barW)
		.attr("y", function(d) { return y(d.value); })
		.attr("x", function (d,i) { return i * (barW + barPad) + svgPad; })
		.attr("fill", function(d){ if (transparencyToggle == 0){ return "rgba(76,134,255," + d.value / 100  + ")"; } else { return "rgba(76,134,255,1)"; } });
		
	bars.enter()
		.append("text")
		.attr("x", width)	
		.attr("y", function(d) { return y(d.value) + 15 - svgPad; })
		//.attr("font-family", "sans-serif")
		//.attr("font-weight", "bold")
		//.attr("font-size", "smaller")
		//.attr("text-anchor", "middle")
		.text(function (d) { return d.value; });
		
	bars.select("text")
		.transition()
		.duration(1000)
		.attr("x", function (d,i) { return (i * (barW + barPad)) + barW/2 + svgPad ;})	
		.attr("y", function(d) { return y(d.value) + 15 - svgPad; })
		.text(function (d) { return d.value; })

	bars.exit()
		.transition()
		.duration(1000)
		.attr("transform", "translate(" + width + ",0)")
		.remove();
	
	xAxis.scale(x);
	yAxis.scale(y);
	
	svg.select(".x.axis").transition().call(xAxis);
	svg.select(".y.axis").transition().call(yAxis);
}

function redraw(){

	y.domain([0,maximum]);
	x.domain(ordinalAlpha);

	svg.selectAll("rect")
		.data(data)
		.transition()
		.duration(500)
		.attr("height", function(d) { return (height - y(d.value)) - svgPad; })
		.attr("y", function(d) { return y(d.value); })
		.attr("fill", function(d){ if (transparencyToggle == 0){ return "rgba(76,134,255," + d.value / 100  + ")"; } else { return "rgba(76,134,255,1)"; } });
		
	svg.selectAll("text")
		.data(data)
		.transition()
		.duration(500)
		.attr("y", function(d) { return y(d.value) + 15 - svgPad; })
		.text(function (d) { return d.value; });
		
	xAxis.scale(x);
	yAxis.scale(y);
	
	svg.select(".x.axis").transition().call(xAxis);
	svg.select(".y.axis").transition().call(yAxis);
}

function initialize(){
	
	barW = (width - svgPad) / dataLength - barPad;
	
	svg = d3.select("body")
			.append("svg")
			.attr("width", width)
			.attr("height", height);
	
	y = d3.scale.linear()
				.domain([0,maximum])
				.range([height - svgPad, svgPad]);
			
	x = d3.scale.ordinal()
				.domain(ordinalAlpha)
				.rangeBands([svgPad, width]);
	
	bar = svg.selectAll("g")
			.data(data)
			.enter()
			.append("g");
			
	bar.append("rect")
		.attr("height", function(d) { return (height - y(d.value)) - svgPad; })
		.attr("width", barW)
		.attr("y", function(d) { return y(d.value); })
		.attr("x", function (d,i) { return i * (barW + barPad) + svgPad; })
		.attr("fill", function(d){ return "rgba(76,134,255," + d.value / 100  + ")"; })
		.attr("stroke", "rgba(76,134,255,1)")
		.attr("stroke-width", .4);
		
	bar.append("text")
		.attr("x", function (d,i) { return (i * (barW + barPad)) + barW/2 + svgPad ;})	
		.attr("y", function(d) { return y(d.value) + 15 - svgPad; })
		.attr("font-family", "sans-serif")
		.attr("font-weight", "bold")
		.attr("font-size", "smaller")
		.attr("text-anchor", "middle")
		.text(function (d) { return d.value; });
	
	xAxis = d3.svg.axis()
			.scale(x)
			.orient("bottom")
			.ticks(dataLength);
		
	yAxis = d3.svg.axis()
			.scale(y)
			.orient("left")
			.ticks(10);
	
	svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + (height - svgPad) + ")")
		.call(xAxis);
		
	svg.append("g")
		.attr("class", "y axis")
		.attr("transform", "translate(" + svgPad + ",0)")
		.call(yAxis);

}
});