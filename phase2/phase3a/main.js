"use strict";

/* dataset with three properties:
   x = caffeineMg
   y = latencyMin
   radius = stressLevel */

let dataset = [
 {caffeineMg:80, latencyMin:4, stressLevel:3},
 {caffeineMg:80, latencyMin:15, stressLevel:3},
 {caffeineMg:0, latencyMin:11, stressLevel:2},
 {caffeineMg:80, latencyMin:13, stressLevel:3},
 {caffeineMg:80, latencyMin:27, stressLevel:3},
 {caffeineMg:0, latencyMin:5, stressLevel:2},
 {caffeineMg:80, latencyMin:5, stressLevel:4},
 {caffeineMg:80, latencyMin:6, stressLevel:2},
 {caffeineMg:0, latencyMin:4, stressLevel:3}
];

// create svg
let svg = d3.select("#chart")
.append("svg")
.attr("width",600)
.attr("height",450);

// scales
let xScale = d3.scaleLinear()
.domain([0,100])
.range([60,450]);

let yScale = d3.scaleLinear()
.domain([0,50])
.range([350,60]);

let rScale = d3.scaleLinear()
.domain([1,4])
.range([4,15]);

// draw scatterplot points
svg.selectAll("circle")
.data(dataset)
.join("circle")
.attr("cx", function(d){
  return xScale(d.caffeineMg);
})
.attr("cy", function(d){
  return yScale(d.latencyMin);
})
.attr("r", function(d){
  return rScale(d.stressLevel);
})
.attr("fill","black");

// axis labels
svg.append("text")
.attr("x",250)
.attr("y",420)
.text("Caffeine (mg)");

svg.append("text")
.attr("transform","rotate(-90)")
.attr("x",-220)
.attr("y",20)
.text("Sleep Latency (min)");

// legend (inside svg, right side)
svg.append("text")
.attr("x",470)
.attr("y",80)
.text("Stress Level");

let levels = [1,3,4];

for(let i=0;i<levels.length;i=i+1){

 svg.append("circle")
 .attr("cx",480)
 .attr("cy",110+i*40)
 .attr("r",rScale(levels[i]))
 .attr("fill","black");

 svg.append("text")
 .attr("x",505)
 .attr("y",115+i*40)
 .text("Level "+levels[i]);
}