

var myData = [100, 125, 244, 355, 500, 20, 720, 643];

var height = 500;
var width = 500;
//var barWidth = 35;
//var barOffset = 5;

var yScale = d3.scaleLinear()
    .domain([0, d3.max(myData)])
    .range([0, height]);

var xScale = d3.scaleOrdinal()
    .domain([0, d3.range(0, myData.length)])
    .range([0, width])

d3.select('#tableValue').append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('background', '#f4f4f4')
    .selectAll('rect')
        .data(myData)
        .enter().append('rect')
            .style('fill', 'lightgreen')
            .attr('width', xScale.range())
            .attr('height', function(d){
                return yScale(d);
            })
            .attr('x', function(d, i){
                return x(i);
                
            })
            .attr('y', function(d){
                return height - yScale(d);
            })