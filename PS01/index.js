

var width = document.getElementById('svg0').clientWidth;
var height = document.getElementById('svg0').clientHeight;

var marginTop = 20;

console.log(width);


var albersProjection = d3.geoAlbers()
    .scale(150000 )
    .rotate([71.057,0])
    .center([0, 42.313])
    .translate([(width/2), (height/2)]);


var path = d3.geoPath()
    .projection(albersProjection);


var svg0 = d3.select('#svg0')
.append('g');


var defs0 = svg0.append('defs');

defs0.append("pattern")
    .attr("id", "page0")
    .attr("width", width)
    .attr("height", height)
    .attr("patternUnits", "userSpaceOnUse")
    .append("image")
    .attr("xlink:href", 'Within_Qingyue Li 0.png')
    .attr("width", width)
    .attr("height", height)
    .attr("x", 0)
    .attr("y", 0);

text = svg0.append('text')
    .text('Hello world!')
    .attr('dy','0.35em')
    .attr('transform', 'translate(380,200)')

rect = svg0.insert('rect','text')
    .attr('x',300)
    .attr('y', 400)
    .attr('width',500)
    .attr('height',400)
    .attr('fill', 'none')
    .attr("stroke","black");







    //.attr('transform', 'translate('+marginLeft+','+marginTop+')');
var svg1 = d3.select('#svg1')
    .append('g');

var defs1 = svg1.append('defs');

defs1.append("pattern")
    .attr("id", "page1")
    .attr("width", width)
    .attr("height", height)
    .attr("patternUnits", "userSpaceOnUse")
    .append("image")
    .attr("xlink:href", 'Within_Qingyue Li 1.png')
    .attr("width", width)
    .attr("height", height)
    .attr("x", 0)
    .attr("y", 0);


var svg2 = d3.select('#svg2')
    .append('g');
var defs2 = svg2.append('defs');

defs2.append("pattern")
    .attr("id", "page2")
    .attr("width", width)
    .attr("height", height)
    .attr("patternUnits", "userSpaceOnUse")
    .append("image")
    .attr("xlink:href", 'Within_Qingyue Li 2.png')
    .attr("width", width)
    .attr("height", height)
    .attr("x", 0)
    .attr("y", 0);



var svg3 = d3.select('#svg3')
    .append('g');

var defs3 = svg3.append('defs');

defs3.append("pattern")
    .attr("id", "page3")
    .attr("width", width)
    .attr("height", height)
    .attr("patternUnits", "userSpaceOnUse")
    .append("image")
    .attr("xlink:href", 'Within_Qingyue Li 3.png')
    .attr("width", width)
    .attr("height", height)
    .attr("x", 0)
    .attr("y", 0);




var svg4 = d3.select('#svg4')
    .append('g');

var defs4 = svg4.append('defs');

defs4.append("pattern")
    .attr("id", "page4")
    .attr("width", width)
    .attr("height", height)
    .attr("patternUnits", "userSpaceOnUse")
    .append("image")
    .attr("xlink:href", 'Within_Qingyue Li 4.png')
    .attr("width", width)
    .attr("height", height)
    .attr("x", 0)
    .attr("y", 0);



svg0.append('rect')
    .attr('width', width)
.attr('height', height-marginTop)
.attr('fill', 'url(#page0)')
.attr('stroke', 'black');

svg1.append('rect')
    .attr('width', width)
    .attr('height', height-marginTop)
    .attr('fill', 'url(#page1)')
    .attr('stroke', 'black');

svg2.append('rect')
    .attr('width', width)
    .attr('height', height-marginTop)
    .attr('fill', 'url(#page2)')
    .attr('stroke', 'black');

svg3.append('rect')
    .attr('width', width)
    .attr('height', height-marginTop)
    .attr('fill', 'url(#page3)')
    .attr('stroke', 'black');

svg4.append('rect')
    .attr('width', width)
    .attr('height', height-marginTop)
    .attr('fill', 'none')
    .attr('stroke', 'black');

//import the data from the .csv file
d3.json('./neighborhood_boston.json', function(dataIn){
    //console.log(dataIn);
    svg4.selectAll('path')
        .data(dataIn.features)
        .enter()
        .append('path')
        .attr('d', path)
        .attr('fill', '#007245')
        .attr('opacity', 0.6)
        .attr('stroke', 'white')
        .attr('stroke-width', 1)
        .attr('cursor','pointer')
        .on('mouseover', function(d){
            //console.log(d.properties.NAME);
        });
    var zoomSettings = {
        duration: 1000,
        ease: d3.easeCubicOut,
        zoomLevel: 5
    };



    svg4.selectAll('circle')
        .data(Arraylist)
        .enter()
        .append('circle')
        .attr('cx', function (d){
            console.log(d);
            return albersProjection([d.long, d.lat])[0];
        })
        .attr('cy', function (d){
            return albersProjection([d.long, d.lat])[1];
        })
        .attr('r',3.5)
        .attr('fill', '#007245')
        .on('mouseover', function(d){
            console.log(d.Name, d.Time);
            d3.select("h2").text(d.Name );
            d3.select(this).attr("class","incident hover");
            d3.select(this).attr("fill","#000000");

            d3.select("h3").text(d.Time);

            d3.select(this).attr("class","incident hover");
            d3.select(this).attr("fill","#000000");


        })
        .on("mouseout", function(d){
            //     d3.select("h2").text("hhh");
            //     d3.select(this).attr("class","incident");
            d3.select(this).attr("fill",'#007245');})

});



Arraylist= [
    {long:-71.090177, lat:42.340324, Name:"Marino Recreation Center", Time:"Monday 5AM-1AM"},
    {long:-71.086143, lat:42.337929, Name:"SquashBusters Badger and Rosen Center",Time:"Monday 6AM-9:15PM"},
    {long:-71.080779, lat:42.341815, Name:"BURN Fitness Studios",Time:"Monday 6AM-9PM"},
    {long:-71.103409, lat:42.338627, Name:"BodyScapes",Time:"Monday 8:30AM–10PM"},
    {long:-71.086143, lat:42.337929, Name:"Brain Fit Club",Time:"Monday 8:30AM-5PM"},
    {long:-71.082911, lat:42.346315, Name:"Flywheel Sports",Time:"Monday 6AM-7:30PM"},
    {long:-71.081266, lat:42.346863, Name:"Boston Sports Clubs",Time:"Monday 5:30AM-10:30PM"}
];
