var fullNames = ["United States","Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Washington D.C.","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];
var statesIndex = ["HI","AK","FL","NH","MI","VT","ME","RI","NY","PA","NJ","DE","MD","VA","WV","OH","IN","IL","CT","WI","NC","DC","MA","TN","AR","MO","GA","SC","KY","AL","LA","MS","IA","MN","OK","TX","NM","KS","NE","SD","ND","WY","MT","CO","ID","UT","AZ","NV","OR","WA","CA","US"], 
statesTrueIndex = ["US","AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"],
	months = ["December","January","February","March","April","May","June","July","August","September","October","November"],
	color, yearDisplay = 2013, month = 7, monthDisplay = months[month], year = 37, uivalue = 452, currentValue, tooltip, svg, gradient, svgLine, y, yMin, yMax, yAxis, line, hoveredState, data1 = [], data2 = [], 
	line1, line2, stateDisplay, usDisplay, theID, mouseover = "notnull", oldYear, oldMonth, stateTriangle, usTriangle, triangleScale, triangleAxis, triangleAxisScale;
	
var margin = {top: 20, right: 10, bottom: 20, left: 30};
var width = 598 - margin.left - margin.right, height = 200 - margin.top - margin.bottom;

$(document).ready(function(){
	
	d3.select("#lock").style("position", "absolute").style("top", "605px").style("left", "236px").style("z-index", "10").style("visibility", "hidden");
	
	hoveredState = statesTrueIndex.indexOf("NY");

	getDate();
	createGradientKeyAndTooltip();
	initializeLines();
	
	function createGradientKeyAndTooltip(){
		svg = d3.select("body").append("svg");
		
		svg.attr("width", 598).attr("height", 45);
		
		gradient = svg
		    .append("linearGradient")
		    .attr("x1", "0%")
		    .attr("x2", "100%")
		    .attr("y1", "0%")
		    .attr("y2", "0%")
		    .attr("id", "gradient")
		    .attr("gradientUnits", "userSpaceOnUse");
	    
		gradient
		    .append("stop")
		    .attr("offset", "0")
		    .attr("stop-color", "#1fb4b4");
		    
		gradient
		    .append("stop")
		    .attr("offset", "1")
		    .attr("stop-color", "#000");
		
		svg
		    .append("rect")
		    .attr("x", 61)
		    .attr("y", 25)
		    .attr("width", 536)
		    .attr("height", 20)
		    .attr("fill", "url(#gradient)");
		    
		tooltip = d3.select("body")
			.append("div")
			.attr("id", "tooltip")
			.style("position", "absolute")
			.style("z-index", "10")
			.style("visibility", "hidden")
			.style("background-color", "#cde1e1")
			.style("height", "25px")
			.style("width", "160px")
			.style("text-align", "center")
			.style("padding-top", "12px")
			.text("tooltip");
			
		stateDisplay = d3.select("body")
			.append("div")
			.style("position", "absolute")
			.style("z-index", "10")
			.style("left", "270px")
			.style("top", "605px")
			.attr("class", "y");
		
		usDisplay = d3.select("body")
			.append("div")
			.style("position", "absolute")
			.style("z-index", "10")
			.style("left", "60px")
			.style("top", "605px")
			.attr("class", "y");
			
		d3.select("body").append("svg")
			.attr("width", 200)
			.attr("height", 200)
			.append("circle")
			.attr("r", 6)
			.attr("stroke", "#000")
			.attr("stroke-width", "2px")
			.attr("fill", "none")
			.attr("cx", 49)
			.attr("cy", 91);
			
		d3.select("body").append("svg")
			.attr("width", 200)
			.attr("height", 200)
			.append("circle")
			.attr("r", 6)
			.attr("stroke", "#1fb4b4")
			.attr("stroke-width", "2px")
			.attr("fill", "none")
			.attr("cx", 58)
			.attr("cy", 91);
			
		d3.select("body").append("svg").attr("width", 16).attr("height", 14)
			.attr("id", "stateTriangle")
			.append("path")
			.attr("d", "M 8 0 L 16 13 L 0 13 z")
			.attr("fill", "#1fb4b4")
			.attr("stroke", "none");
			
		var usTriangleSVG = d3.select("body").append("svg").attr("id", "usTriangle").attr("width", 26).attr("height", 14).append("g");
		
		usTriangleSVG.append("text")
			.text("U.S.")
			.attr("id", "usTriangleText");
			
		usTriangleSVG.append("path")
			.attr("d", "M 0 0 L 16 0 L 8 13 z")
			.attr("fill", "#000")
			.attr("stroke", "none");
			
		triangleScale = d3.scale.linear()
			.range([54, 589]);
			
		triangleScale.domain([2, 18]);

		triangleAxisScale = d3.scale.linear()
			.range([129, 531]);
			
		triangleAxisScale.domain([4, 16]);
		
		triangleAxis = d3.svg.axis()
			.scale(triangleAxisScale)
			.ticks(9)
			.tickSize(0)
			.orient("bottom");
		
		d3.select("body").append("svg").attr("id", "triangleAxis").append("g")
			.attr("class", "triangleAxis")
			.call(triangleAxis)
			.style("fill", "white");
	}

	/*d3.select("#startstop").on("click", function(){
		$("#startstop").html("Start");
		clearInterval(timer);
	});
	
	var i = 1
	var timer = setInterval(function() { alert(i++) }, 2000);*/

	function initializeLines(){
		
		data1 = [];
		data2 = [];
		
		for (var zz = 0; zz < 36; zz++){
			data1.push(state[0].values[(uivalue - 1) - zz]);
		}
		
		for (var zz = 0; zz < 36; zz++){
			data2.push(state[hoveredState].values[(uivalue - 1) - zz]);
		}
		
		data1.reverse();
		data2.reverse();
		
		if (Math.floor(d3.min(data1)) < Math.floor(d3.min(data2))){
			yMin = Math.floor(d3.min(data1));
		} else {
			yMin = Math.floor(d3.min(data2));
		}

		if (Math.ceil(d3.max(data1)) > Math.ceil(d3.max(data2))){
			yMax = Math.ceil(d3.max(data1));
		} else {
			yMax = Math.ceil(d3.max(data2));
		}
		
		d3.select("#usTriangle").style("left", function (){ return triangleScale(data1[35]); });
		d3.select("#stateTriangle").style("left", function (){ return triangleScale(data2[35]); });
		
		y = d3.scale.linear()
			.range([height, 0]);
		
		yAxis = d3.svg.axis()
			.scale(y)
			.ticks(5)
			.tickSize(-width)
			.orient("left");
		
		line = d3.svg.line()
			.x(function(d,i) { return i * (width / 35); })
			.y(function(d,i) { return y(d); });
			
		svgLine = d3.select("body").append("svg")
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
			.attr("id", "svgLine")
			.append("g")
			.attr("transform", "translate(40,10)");
			
		y.domain([yMin, yMax]);
		
		svgLine.append("g")
			.attr("class", "y axis")
			.call(yAxis);
		
		svgLine.append("path")
			.datum(data1)
			.attr("class", "line1")
			.attr("d", line);
			
		svgLine.append("path")
			.datum(data2)
			.attr("class", "line2")
			.attr("d", line);
			
		stateDisplay.text(fullNames[hoveredState] + ": " + data2[35] + "%");
		usDisplay.text("United States: " + data1[35] + "%");
	}
	
	function redrawLine(){
	
		data1 = [];
		data2 = [];
		
		for (var zz = 0; zz < 36; zz++){
			data1.push(state[0].values[(uivalue - 1) - zz]);
		}
		
		for (var zz = 0; zz < 36; zz++){
			data2.push(state[hoveredState].values[(uivalue - 1) - zz]);
		}
		
		data1.reverse();
		data2.reverse();
		
		var data1min = Math.min.apply(Math, data1);
		var data1max = Math.max.apply(Math, data1);
		var data2min = Math.min.apply(Math, data2);
		var data2max = Math.max.apply(Math, data2);
		
		if (data1min < data2min){
			yMin = Math.floor(data1min);
		} else {
			yMin = Math.floor(data2min);
		}

		if (data1max > data2max){
			yMax = Math.ceil(data1max);
		} else {
			yMax = Math.ceil(data2max);
		}
		
		d3.select("#usTriangle").style("left", function (){ return triangleScale(data1[35]); });
		d3.select("#stateTriangle").style("left", function (){ return triangleScale(data2[35]); });
		
		y = d3.scale.linear()
			.range([height, 0]);
		
		yAxis = d3.svg.axis()
			.scale(y)
			.ticks(5)
			.tickSize(-width)
			.orient("left");
		
		line = d3.svg.line()
			.x(function(d,i) { return i * (width / 35); })
			.y(function(d,i) { return y(d); });
			
		svgLine.remove();
			
		svgLine = d3.select("body").append("svg")
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
			.attr("id", "svgLine")
			.append("g")
			.attr("transform", "translate(40,10)");
			
		y.domain([yMin, yMax]);
		
		svgLine.append("g")
			.attr("class", "y axis")
			.call(yAxis);
		
		svgLine.append("path")
			.datum(data1)
			.attr("class", "line1")
			.attr("d", line);
			
		svgLine.append("path")
			.datum(data2)
			.attr("class", "line2")
			.attr("d", line);
			
		stateDisplay.text(fullNames[hoveredState] + ": " + data2[35] + "%");
		usDisplay.text("United States: " + data1[35] + "%");
			
	}
	
	function redrawLineFromHover(hoveredState){
	
		data1 = [];
		data2 = [];
		
		for (var zz = 0; zz < 36; zz++){
			data1.push(state[0].values[(uivalue - 1) - zz]);
		}
		
		for (var zz = 0; zz < 36; zz++){
			data2.push(state[hoveredState].values[(uivalue - 1) - zz]);
		}
		
		data1.reverse();
		data2.reverse();
		
		var data1min = Math.min.apply(Math, data1);
		var data1max = Math.max.apply(Math, data1);
		var data2min = Math.min.apply(Math, data2);
		var data2max = Math.max.apply(Math, data2);
		
		if (data1min < data2min){
			yMin = Math.floor(data1min);
		} else {
			yMin = Math.floor(data2min);
		}

		if (data1max > data2max){
			yMax = Math.ceil(data1max);
		} else {
			yMax = Math.ceil(data2max);
		}
		
		d3.select("#usTriangle").style("left", function (){ return triangleScale(data1[35]); });
		d3.select("#stateTriangle").style("left", function (){ return triangleScale(data2[35]); });
		
		y = d3.scale.linear()
			.range([height, 0]);
		
		yAxis = d3.svg.axis()
			.scale(y)
			.ticks(6)
			.tickSize(-width)
			.orient("left");
		
		line = d3.svg.line()
			.x(function(d,i) { return i * (width / 35); })
			.y(function(d,i) { return y(d); });
			
		svgLine.remove();
			
		svgLine = d3.select("body").append("svg")
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
			.attr("id", "svgLine")
			.append("g")
			.attr("transform", "translate(40,10)");
			
		y.domain([yMin, yMax]);
		
		svgLine.append("g")
			.attr("class", "y axis")
			.call(yAxis);
		
		svgLine.append("path")
			.datum(data1)
			.attr("class", "line1")
			.attr("d", line);
			
		svgLine.append("path")
			.datum(data2)
			.attr("class", "line2")
			.attr("d", line);
			
		stateDisplay.text(fullNames[hoveredState] + ": " + data2[35] + "%");
		usDisplay.text("United States: " + data1[35] + "%");
			
	}
	                                                            
	
	$("#year").html(monthDisplay + ", " + yearDisplay);
	$("#oldYear").html(oldMonth + ", " + oldYear);
	
	color = d3.scale.linear().domain([2,18]).range(["#1fb4b4", "#000"]);
	
	d3.selectAll(".state").style("fill", function(d,i){ return color(state[statesTrueIndex.indexOf(this.id)].values[uivalue-1]); });

	d3.selectAll(".state").on("mouseover", function(){ theID = this.id; mouseover(); });
	d3.selectAll(".state").on("mousemove", function(){ return tooltip.style("top", (event.pageY-10)+"px").style("left", (event.pageX+10)+"px"); });
	d3.selectAll(".state").on("mouseout", function(){ return tooltip.style("visibility", "hidden"); });
	d3.selectAll(".state").on("click", function(){ click(); });
	
	function mouseover(){
			hoveredState = statesTrueIndex.indexOf(theID);
			redrawLineFromHover(hoveredState);
			stateDisplay.text(fullNames[hoveredState] + ": " + data2[35] + "%");
			return tooltip.style("visibility", "visible").text(fullNames[statesTrueIndex.indexOf(theID)] + ": " + state[hoveredState].values[uivalue-1] + "%");
	}
	
	function click(){
		if (d3.selectAll(".state").on("mouseover") == null){
			d3.select("#lock").style("visibility", "hidden");
			d3.selectAll(".state").on("mouseover", function(){ theID = this.id; mouseover(); });
		} else {
			d3.select("#lock").style("visibility", "visible");
			d3.selectAll(".state").on("mouseover", null);
		}
	}
	
	$("#slider").slider({ range: "min", value: uivalue, min: 37, max: uivalue, slide: function(event, ui) { uivalue = ui.value; changeDate(); redrawLine(); }});
	
	function changeDate(){
		getDate();
		$("#year").html(monthDisplay + ", " + yearDisplay);
		$("#oldYear").html(oldMonth + ", " + oldYear);
		d3.selectAll(".state").style("fill", function(d,i){ return color(state[statesTrueIndex.indexOf(this.id)].values[uivalue-1]); });
	}
	
	function getDate(){
		if (uivalue % 12 == 0){
			yearDisplay = 1975 + (uivalue / 12);
			oldYear = 1972 + (uivalue / 12);
			year = (uivalue / 12) - 1;
			month = 11;
		} else if (uivalue % 12 != 0){
			yearDisplay = 1976 + (Math.floor(uivalue / 12));
			oldYear = 1973 + (Math.floor(uivalue / 12));
			year = Math.floor(uivalue / 12);
			month = (uivalue % 12) - 1;
		}
		monthDisplay = months[uivalue % 12];
		oldMonth = months[(uivalue - 35) % 12];
	}
	
});