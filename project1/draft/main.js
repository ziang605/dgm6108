"use strict"

/*  Variable that enables you to "talk to" your SVG drawing canvas. */
let drawing = d3.select("#canvas")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

/* drum */
let drum = drawing.append('ellipse')
  .attr('cx', 145)
  .attr('cy', 140)
  .attr('rx', 45)
  .attr('ry', 45)
  .attr('fill', 'white')
  .attr('stroke', 'black')
  .attr('stroke-width', 1);

/* body */
let body = drawing.append('polyline')
  .attr('points', closedPolygon(
    95, 85,    
    100, 115,  
    115, 170,  
    95, 195,   
    75, 170,   
    90, 115    
  ))
  .attr('fill', '#6f8193');

/* left arm (upper) */
let leftArmUpper = drawing.append('line')
  .attr('x1', 88)
  .attr('y1', 120)   
  .attr('x2', 65)
  .attr('y2', 140)   
  .attr('stroke', 'black')
  .attr('stroke-width', 1);

/* left arm (lower) */
let leftArmLower = drawing.append('line')
  .attr('x1', 65)
  .attr('y1', 140)  
  .attr('x2', 45)
  .attr('y2', 125)  
  .attr('stroke', 'black')
  .attr('stroke-width', 1);

/* left hand ball */
let leftHandBall = drawing.append('ellipse')
  .attr('cx', 45)
  .attr('cy', 125) 
  .attr('rx', 10)
  .attr('ry', 10)
  .attr('fill', 'black');
  
/* right arm */
let rightArm = drawing.append('line')
  .attr('x1', 100)   
  .attr('y1', 110)   
  .attr('x2', 110)  
  .attr('y2', 115)
  .attr('stroke', 'black')
  .attr('stroke-width', 1);
  
/* left leg (longer) */
let leftLegUpper = drawing.append('line')
  .attr('x1', 88)
  .attr('y1', 185)
  .attr('x2', 68)   
  .attr('y2', 240)
  .attr('stroke', 'black')
  .attr('stroke-width', 1);

let leftLegLower = drawing.append('line')
  .attr('x1', 68)
  .attr('y1', 240)
  .attr('x2', 85)   
  .attr('y2', 235)
  .attr('stroke', 'black')
  .attr('stroke-width', 1);

/* right leg (longer) */
let rightLegUpper = drawing.append('line')
  .attr('x1', 102)
  .attr('y1', 185)
  .attr('x2', 122)  
  .attr('y2', 240)
  .attr('stroke', 'black')
  .attr('stroke-width', 1);

let rightLegLower = drawing.append('line')
  .attr('x1', 122)
  .attr('y1', 240)
  .attr('x2', 135)  
  .attr('y2', 235)
  .attr('stroke', 'black')
  .attr('stroke-width', 1);

  /* head */
let head = drawing.append('ellipse')
  .attr('cx', 95)
  .attr('cy', 63)
  .attr('rx', 20)
  .attr('ry', 20)
  .attr('fill', '#f6b6c8');

/* hat */
let hat = drawing.append('rect')
  .attr('x', 75)
  .attr('y', 40)
  .attr('width', 60)
  .attr('height', 20)
  .attr('fill', 'blue');

  /* hat brim */
let hatBrim = drawing.append('rect')
  .attr('x', 135)     
  .attr('y', 55)    
  .attr('width', 15)
  .attr('height', 6)
  .attr('fill', '#8fc6ff');
  
/* Draw a border that matches the maximum drawing area for this assignment.
    Assign the border to a variable so that:
        (1) We know what the purpose of the shape is, and
        (2) We will have the ability to change it later (in a future assignment)
*/
let border = drawing.append("rect")
    .attr("width", 500)
    .attr("height", 500)
    .attr("fill", "none")
    .attr("stroke", "red");

/* Write your code for Project 1 beneath this comment */
