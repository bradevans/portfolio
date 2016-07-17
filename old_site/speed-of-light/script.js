var width = 1100, height = 3000, barPad = 10, barW, xScale, yScale, svg, xAxis, yAxis, svgPad = 100, dataLength = 8;
			
var data = [27.8, 74.6, 268, 311, 761, 13000, 36360, 671000000];
var dataLabels = ["27.8", "74.6", "268", "311", "761", "13,000", "36,360", "671,000,000"];
var textLabels = ["Usain Bolt", "Cheetah", "Bugatti Veyron", "Bullet Train", "Speed of Sound", "HTV2 Jet", "New Horizons", "Speed of Light"];

$(document).ready(function(){

	initialize();
	
	function initialize(){
	
	barW = (width - svgPad) / dataLength - barPad;
	
	svg = d3.select("body")
			.append("svg")
			.attr("width", width)
			.attr("height", height);
	
	yScale = d3.scale.log()
				.domain([1,d3.max(data)])
				.range([height - svgPad, svgPad]);
	
	bar = svg.selectAll("g")
			.data(data)
			.enter()
			.append("g");
			
	bar.append("rect")
		.attr("height", function(d) { return (height - yScale(d)) - svgPad; })
		.attr("width", barW)
		.attr("y", function(d) { return yScale(d); })
		.attr("x", function (d,i) { return i * (barW + barPad) + svgPad; })
		.attr("fill", function(d){ return "#6FA7F5"; });
		
	yAxis = d3.svg.axis()
			.scale(yScale)
			.orient("left")
			.tickFormat(d3.format(",.0f"));
		
	svg.append("g")
		.attr("class", "y axis")
		.attr("transform", "translate(" + svgPad + ",0)")
		.call(yAxis);
		
	svg.append("rect")
		.attr("height", 2)
		.attr("width", 1100)
		.attr("x", 100)
		.attr("y", 2900);
}
	
});