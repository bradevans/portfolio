$(function () {

    $(".full-height").height(window.innerHeight);

    var posts_data = [],
        posts_times = [],
        exposure_data = [],
        exposure_times = [],
        engagement_data = [],
        engagement_times = [];

    String.prototype.trunc = function(n){
        return this.length > n ? this.substr(0, n - 1) + '&hellip;' : this;
    };

    function getNiceDate(value){
        var d = new Date(value),
            month = d.getMonth() + 1,
            day = d.getDate(),
            year = d.getFullYear(),
            hour = d.getHours() > 12 ? d.getHours() - 12 : d.getHours(),
            minute = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes(),
            ampm = d.getHours() > 12 ? "pm" : "am";

        hour === 0 ? hour = "12" : hour;

        return month + "/" + day + " " + hour + ":" + minute + " " + ampm;
    }

    function addCommas(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    for(var i = 0; i < data.data.rows.length; i++){
        if(i === 0){
            $(".main-table").html("<tr><td>" + getNiceDate(data.data.rows[i][0].value) + "</td>"
                + "<td>" + data.data.rows[i][2] + "</td>"
                + "<td><a href='#'>" + (data.data.rows[i][3].label).trunc(60) + "</a></td>"
                + "<td>" + data.data.rows[i][4].values + "</td>"
                + "<td>" + addCommas(data.data.rows[i][5].values) + "</td>"
                + "<td>" + data.data.rows[i][6].values + "</td></tr>"
            );
        } else {
            $(".main-table tr:last").after("<tr><td>" + getNiceDate(data.data.rows[i][0].value) + "</td>"
                + "<td>" + data.data.rows[i][2] + "</td>"
                + "<td><a href='#'>" + (data.data.rows[i][3].label).trunc(60) + "</a></td>"
                + "<td>" + data.data.rows[i][4].values + "</td>"
                + "<td>" + addCommas(data.data.rows[i][5].values) + "</td>"
                + "<td>" + data.data.rows[i][6].values + "</td></tr>"
            );
        }
        posts_data.push(data.data.rows[i][4].values[0]);
        posts_times.push(data.data.rows[i][0].value);

        exposure_data.push(data.data.rows[i][5].values[0]);
        exposure_times.push(data.data.rows[i][0].value);

        engagement_data.push(data.data.rows[i][6].values[0]);
        engagement_times.push(data.data.rows[i][0].value);
    }

    $(".table-parent").height(window.innerHeight - 150);

    // CHART1

    var viz1 = $(".viz1"),
        margin = 20,
        padding = 35,
        width = viz1.width() - margin - margin,
        height = (window.innerHeight - 150) / 3 - margin - margin,
        xScale = d3.time.scale().domain([d3.min(exposure_times), d3.max(exposure_times)]).range([padding, width]),
        yScale = d3.scale.log().domain([1, 1000000]).range([height - margin, margin]);

    var svg = d3.select(".viz1").append("svg")
        .attr("width", width)
        .attr("height", height);

    var line = d3.svg.line()
        .x(function(d,i) { return ((width - padding) / exposure_data.length) * i })
        .y(function (d) {
            if(d === 0){
                return 1;
            }
            return yScale(d);
        });

    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom")
        .ticks(2)
        .tickFormat(d3.time.format("%B"));

    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left")
        .tickSize(-width)
        .ticks(7)
        .tickFormat(d3.format("s"))
        .tickValues([1, 1e1, 1e2, 1e3, 1e4, 1e5, 1e6]);

    svg.append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate(0, ' + (height - margin) + ')')
        .call(xAxis);

    svg.append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate(' + padding + ', 0)')
        .call(yAxis);

    svg.append('path')
        .datum(exposure_data)
        .attr('class', 'line')
        .attr('d', line)
        .attr("transform", "translate(" + padding + ",18)");

    // CHART2

    var viz2 = $(".viz2"),
        xScale2 = d3.time.scale().domain([d3.min(posts_times), d3.max(posts_times)]).range([padding, width]),
        yScale2 = d3.scale.linear().domain([0, 1]).range([height - margin, margin]);

    var svg2 = d3.select(".viz2").append("svg")
        .attr("width", width)
        .attr("height", height);

    var line2 = d3.svg.line()
        .x(function(d,i) { return ((width - padding) / posts_data.length) * i })
        .y(function (d) {
            if(d === 0){
                return 1;
            }
            return yScale2(d);
        });

    var xAxis2 = d3.svg.axis()
        .scale(xScale2)
        .orient("bottom")
        .ticks(2)
        .tickFormat(d3.time.format("%B"));

    var yAxis2 = d3.svg.axis()
        .scale(yScale2)
        .orient("left")
        .tickSize(-width)
        .ticks(1);

    svg2.append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate(0, ' + (height - margin) + ')')
        .call(xAxis2);

    svg2.append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate(' + padding + ', 0)')
        .call(yAxis2);

    var bar = svg2.selectAll("rect")
        .data(posts_data)
        .enter()
        .append("rect")
        .attr("x", padding);

    bar.attr("height", function(d) { return height - yScale2(d) - margin; })
        .attr("width", 1)
        .attr("y", function(d) { return yScale2(d); })
        .attr("x", function (d,i) { return (i * 2.46) + padding; });

    // CHART3

    var viz3 = $(".viz3"),
        xScale3 = d3.time.scale().domain([d3.min(engagement_times), d3.max(engagement_times)]).range([padding, width]),
        yScale3 = d3.scale.linear().domain([d3.min(engagement_data), d3.max(engagement_data)]).range([height - margin, margin]);

    var svg3 = d3.select(".viz3").append("svg")
        .attr("width", width)
        .attr("height", height);

    var line3 = d3.svg.line()
        .x(function(d,i) { return ((width - padding) / engagement_data.length) * i })
        .y(function (d) { return yScale3(d); });

    var xAxis3 = d3.svg.axis()
        .scale(xScale3)
        .orient("bottom")
        .ticks(2)
        .tickFormat(d3.time.format("%B"));

    var yAxis3 = d3.svg.axis()
        .scale(yScale3)
        .orient("left")
        .tickSize(-width)
        .ticks(4);

    svg3.append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate(0, ' + (height - margin) + ')')
        .call(xAxis3);

    svg3.append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate(' + padding + ', 0)')
        .call(yAxis3);

    svg3.append('path')
        .datum(engagement_data)
        .attr('class', 'line')
        .attr('d', line3)
        .attr("transform", "translate(" + padding + ",0)");

    // DRAG

    var dragSrcEl = null;

    function handleDragStart(e) {
        this.style.opacity = "0.4";

        console.log($(this).data("which-column"));

        dragSrcEl = this;

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }

    function handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }

        e.dataTransfer.dropEffect = 'move';

        return false;
    }

    function handleDragEnd(e) {
        this.style.opacity = "1";
    }

    function handleDrop(e) {
        $(".draggable").css("opacity", 1);

        if (e.preventDefault) {
            e.preventDefault();
        }

        if (dragSrcEl != this) {
            dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
        }

        if($(".left-column").children().hasClass("table-col")){
            document.cookie = "leftColumn=table";
        } else {
            document.cookie = "leftColumn=chart";
        }

        return false;
    }

    var draggable = document.querySelectorAll(".draggable");

    [].forEach.call(draggable, function(dragg) {
        dragg.addEventListener("dragstart", handleDragStart, false);
        dragg.addEventListener("dragend", handleDragEnd, false);
        dragg.addEventListener("dragover", handleDragOver, false);
        dragg.addEventListener("drop", handleDrop, false);
    });

    var left_column = $(".left-column"),
        right_column = $(".right-column"),
        left_html = left_column.html(),
        right_html = right_column.html(),
        cookie = document.cookie.substr(11, 5);

    if(cookie === "table"){
        left_column.html(left_html);
        right_column.html(right_html);
    } else if(cookie === "chart"){
        left_column.html(right_html);
        right_column.html(left_html);
    }
});