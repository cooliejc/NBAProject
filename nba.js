//import {select, csv, ScaleLinear} from 'd3';

//const svg = select('svg');

//const width = +svg.attr('width');
//const height = +svg.attr('height');


//const render = data => {
  //  svg.selectAll('rect').data(data)
    //    .enter().append('rect')
      //      .attr('width', 300)
        //    .attr('height',300)
//};


//this code is place holder for inserting data locally. Mainly used for personal learning
//CloseEvent('placeHolderData.csv').then(data => {
  //  data.forEach(d => {
    //    d.population = +d.population;
    //});
    //render(data);
    //console.log(data)
//})

var myData = [100, 125, 244, 355, 500];

var height = 500;
var width = 500;
var barWidth = 35;
var barOffset = 5;

var myChart = d3.select('#tableValue').append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('background', '#f4f4f4')
    .selectAll('rect')
        .data(myData)
        .enter().append('rect')
            .style('fill', 'lightgreen')
            .attr('width', barWidth)
            .attr('height', function(d){
                return d;
            })
            .attr('x', function(d, i){
                return i * (barWidth + barOffset
                    );
            })
            .attr('y', function(d){
                return height - d;
            })