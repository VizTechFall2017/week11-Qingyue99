var margin = {top:0, right: 70, bottom: 80, left: 10},
    outerWidth = 1000,
    outerHeight = 500,
    width = 1000 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .range([ 0, width ]).nice();

var y = d3.scale.linear()
    .range([ height, 0 ]).nice();

var xValue = "frequency",
        yValue = "nearby",
        rValue = "percentage",
        colorValue = "raw";

d3.csv("bcc.csv", function(data){
    data.forEach(function(d){
        d.frequency = +d.frequency;
        d.percentage = +d.percentage;
        d.nearby = +d.nearby;
    });
    console.log(data);
    var xMax = d3.max(data, function(d) { return d.frequency; }),
        xMin = d3.min(data, function(d) { return d.frequency; });
    if (xMin> 0 )
        xMin = 0;

        yMax = d3.max(data, function(d) { return d.nearby; }),
        yMin = d3.min(data, function(d) { return d.nearby; });
        if (yMin> 0 )
            yMin = 0;


    x.domain([xMin, xMax]);
    y.domain([yMin, yMax]);
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")
        .tickSize(-height);

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .tickSize(-width);

    var color = d3.scale.category10();

    var tip = d3.tip()
        .attr("class", "d3-tip")
        .offset([-10, 0])
        .html(function(d) {
            return xValue + ": " + d[xValue] + "<br>" + yValue + ": " + d[yValue] + "<br>" + rValue + ": " + d[rValue];
        });

    var zoomBeh = d3.behavior.zoom()
        .x(x)
        .y(y)
        .scaleExtent([0.5, 1])
        .on("zoom", zoom);

    var svg = d3.select("#bubble3")
        .append("svg")
        .attr("width", outerWidth)
        .attr("height", outerHeight)
         .style("overflow","visible")
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        .call(zoomBeh);

    svg.call(tip);

    svg.append("rect")
        .attr("width", width)
        .attr("height", height);

    svg.append("g")
        .classed("x axis", true)
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .append("text")
        .classed("label", true)
        .attr("x", width)
        .attr("y", margin.bottom - 10)
        .style("text-anchor", "end")
        .text(xValue);

    svg.append("g")
        .classed("y axis", true)
        .call(yAxis)
        .append("text")
        .classed("label", true)
        .attr("transform", "rotate(-90)")
        .attr("y", -margin.left-20)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text(yValue);

    var objects = svg.append("svg")
        .classed("objects", true)
        .attr("width", width)
        .attr("height", height);

    objects.append("svg:line")
        .classed("axisLine hAxisLine", true)
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", width)
        .attr("y2", 0)
        .attr("transform", "translate(0," + height + ")");

    objects.append("svg:line")
        .classed("axisLine vAxisLine", true)
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", 0)
        .attr("y2", height);

    objects.selectAll(".dot")
        .data(data)
        .enter().append("circle")
        .classed("dot", true)
        .attr("r", function (d) { return 235*d[rValue]; })
        .attr("transform", transform)
        .style("fill", function(d) { return color(d[colorValue]); })
        .on("mouseover", tip.show)
        .on("mouseout", tip.hide);

    function zoom() {
        svg.select(".x.axis").call(xAxis);
        svg.select(".y.axis").call(yAxis);

        svg.selectAll(".dot")
            .attr("transform", transform);
    }

    function transform(d) {
        return "translate(" + x(d[xValue]) + "," + y(d[yValue]) + ")";
    }
});

