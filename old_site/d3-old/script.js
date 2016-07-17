$(document).ready(function() {

	var earnings;
	
	var w = 275;
	var h = 115;
	
	var cw; // Should I make a chartWidth and chartHeight variable to deal with positioning the far left 
	var ch; // bar the same distance from the left as the far right bar is from the right??  -- current solution isn't dynamic
	
	// Deal with the above comment. Deal with the barLRpadMaker() function
	// Flip the y axis
	// Add the estimates
	// Make sure all domains and ranges are dynamic using min/max
	// 
	
	var lPad = 18;
	var tPad = 4;
	var rPad = 30;
	var bPad = 12;
	
	var barPad = 25;
	var barLRpad;
	
	var xScaleDomain = [];
	
	var actOrEst = "e "
	var loadedSecurity = "3M";
	
	d3.tsv("data/tsv/earnings.tsv", function(data) {
		earnings = data;
		barLRpadMaker();
		xScaleDomainMaker();
		makeChart();
	});
	
	function barLRpadMaker(){
		for (var i = 0; i < earnings.length; i++){
			barLRpad = ((w - lPad - barPad) / earnings.length) / (earnings.length / 2);
		}
	}
	
	function xScaleDomainMaker(){
		for(var i = 0; i < earnings.length; i++){
			xScaleDomain.push(earnings[i]["Quarter"]);
		}
	};
	
	function makeChart(){
	
		// Define x scale
		var xScale = d3.scale.ordinal()
			.domain(xScaleDomain)
			.rangeBands([0, w - lPad]);		
		
		// Define y scale
		var yScale = d3.scale.linear()
			.domain([0,2])
			.range([0,h - bPad - tPad]);
			
		// Create SVG object		
		var earnChart = d3.select("body")
			.append("svg")
				.attr("class", "earnChart")
				.attr("width", w)
				.attr("height", h);
				
		// Define y axis
		var yAxis = d3.svg.axis()
			.scale(yScale)
			.ticks(4)
			.tickSize(-w)
			.orient("left");
			
		// Call y axis to SVG group object
		earnChart.append("g")
			.attr("class","axis")
			.attr("transform", "translate(" + lPad + ", " + tPad + ")")
			.call(yAxis);
						
		// Bind data; apply datum to attribute
		earnChart.selectAll("rect")
			.data(earnings)
			.enter()
			.append("rect")
			.attr("x", function(d, i) {
				return (i * ((w - lPad) / earnings.length)) + lPad + barLRpad;
			})
			.attr("y", function(d, i){
				return (h - bPad) - yScale(earnings[i][actOrEst + loadedSecurity]);
			})
			.attr("width", (w - lPad) / earnings.length - barPad)
			.attr("height", function (d, i){
				//return h - bPad - tPad - ((h - bPad) - yScale(earnings[i]["a " + loadedSecurity]));
				return yScale(earnings[i][actOrEst + loadedSecurity]);
			})
			.attr("fill", "rgba(0,188,228,1)");
		
		// Define x axis
		var xAxis = d3.svg.axis()
			.scale(xScale)
			.tickSize(0)
			.orient("bottom");
		
		// Call x axis to SVG group object
		earnChart.append("g")
			.attr("class","axis")
			.attr("transform", "translate(" + lPad + "," + (h - bPad) + ")")
			.call(xAxis);
			
		
	};
	       		 
});