$(document).ready(function() {

	var earnings;
	var w = 275;
	var h = 115;
	var barPadding = 2;
	var labelPadding = 12;
	var xScaleDomain = [];
	var loadedSecurity = "3M";
	
	
	
	function doSomethingWithData(jsondata) {
      console.log(jsondata);
    }

    d3.json("groupedJSON/earnings.json", doSomethingWithData);
	
	/*function xScaleDomainMaker(){
		for(var i = 0; i < earnings.length; i++){
			xScaleDomain.push(earnings[i]["Quarter"]);
		}
	};
	
	function makeChart(){
	
		// Define x scale
		var xScale = d3.scale.ordinal()
			.domain(xScaleDomain)
			.rangeBands([0, w]);		
		
		// Define y scale
		var yScale = d3.scale.linear()
			.domain([0,2])
			.range([0,h]);
			
		// Create SVG object
		var earnChart = d3.select("body")
			.append("svg")
				.attr("width", w)
				.attr("height", h);
						
		// Bind data; apply data attributes
		earnChart.selectAll("rect")
			.data(earnings)
			.enter()
			.append("rect")
			.attr("x", function(d, i) {
				return i * (w / earnings.length);
			})
			.attr("y", function(d, i){
				return h - yScale(((earnings[i]["a " + loadedSecurity])));
			})
			.attr("width", w / earnings.length - barPadding)
			.attr("height", function (d, i){
				return yScale((earnings[i]["a " + loadedSecurity]));
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
			.attr("transform", "translate(0," + h + ")")
			.call(xAxis);
		
		// Define y axis
		var yAxis = d3.svg.axis()
			.scale(yScale)
			.orient("left");
		
		// Call y axis to SVG group object
		earnChart.append("g")
			.attr("class","axis")
			.attr("transform", "translate(30,0)")
			.call(yAxis);
	};*/
	       		 
});