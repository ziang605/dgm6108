"use strict"

document.getElementById("action").addEventListener("click", processForm);

let xInput, yInput, choice;

function processForm() {
    /* Get data from the form */
    xInput = Number(document.getElementById("xInput").value);
    yInput = Number(document.getElementById("yInput").value);
    /* STEP 9: CHECK SELECT MENU OPTION HERE USING VARIABLE CHOICE */
    choice = document.getElementById("choice").value;
    console.log("choice =", choice);

    drawing.selectAll('svg>*:not(#border)').remove(); // This line selects everything that has been drawn in the SVG and deletes it all
    drawImage();
}

/* set up the drawing canvas - Be sure not to copy this code from your draft project! */
let drawing = d3.select("#canvas")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

let border = drawing.append("rect")
    .attr("id", "border")
    .attr("width", 500)
    .attr("height", 500)
    .attr("fill", "none")
    .attr("stroke", "red");

/*
The function below is called when the user presses the "Draw!" button and is where you will put most of your drawing code. Please follow the instructions in the homework PDF for this step.
*/

function drawImage() {

    // Step 5: configuration variables for my drawing
    let originX = xInput;
    let originY = yInput;

/* drum */
let drum = drawing.append('ellipse')
  .attr('cx', originX)
  .attr('cy', originY)
  .attr('rx', 45)
  .attr('ry', 45)
  .attr('fill', 'white')
  .attr('stroke', 'black')
  .attr('stroke-width', 1);

/* body */
let body = drawing.append('polyline')
  .attr('points', closedPolygon(
    originX - 50, originY - 55,
    originX - 45, originY - 25,
    originX - 30, originY + 30,
    originX - 50, originY + 55,
    originX - 70, originY + 30,
    originX - 55, originY - 25
  ))
  .attr('fill', '#6f8193');

/* left arm (upper) */
let leftArmUpper = drawing.append('line')
  .attr('x1', originX - 57)
  .attr('y1', originY - 20)   
  .attr('x2', originX - 80)
  .attr('y2', originY + 0)   
  .attr('stroke', 'black')
  .attr('stroke-width', 1);

/* left arm (lower) */
let leftArmLower = drawing.append('line')
  .attr('x1', originX - 80)
  .attr('y1', originY + 0)  
  .attr('x2', originX - 100)
  .attr('y2', originY - 15)  
  .attr('stroke', 'black')
  .attr('stroke-width', 1);

/* left hand ball */
let leftHandBall = drawing.append('ellipse')
  .attr('cx', originX - 100)
  .attr('cy', originY -15) 
  .attr('rx', 10)
  .attr('ry', 10)
  .attr('fill', 'black');
  
/* right arm */
let rightArm = drawing.append('line')
  .attr('x1', originX - 50)   
  .attr('y1', originY - 30)   
  .attr('x2', originX - 35)  
  .attr('y2', originY - 25)
  .attr('stroke', 'black')
  .attr('stroke-width', 1);
  
//* left leg (upper) */
let leftLegUpper = drawing.append('line')
  .attr('x1', originX - 57)
  .attr('y1', originY + 45)
  .attr('x2', originX - 77)
  .attr('y2', originY + 100)
  .attr('stroke', 'black')
  .attr('stroke-width', 1);

/* left leg (lower) */
let leftLegLower = drawing.append('line')
  .attr('x1', originX - 77)
  .attr('y1', originY + 100)
  .attr('x2', originX - 60)
  .attr('y2', originY + 95)
  .attr('stroke', 'black')
  .attr('stroke-width', 1);

/* right leg (upper) */
let rightLegUpper = drawing.append('line')
  .attr('x1', originX - 43)
  .attr('y1', originY + 45)
  .attr('x2', originX - 23)
  .attr('y2', originY + 100)
  .attr('stroke', 'black')
  .attr('stroke-width', 1);

/* right leg (lower) */
let rightLegLower = drawing.append('line')
  .attr('x1', originX - 23)
  .attr('y1', originY + 100)
  .attr('x2', originX - 10)
  .attr('y2', originY + 95)
  .attr('stroke', 'black')
  .attr('stroke-width', 1);

  /* head */
let head = drawing.append('ellipse')
  .attr('cx', originX - 50)
  .attr('cy', originY - 77)
  .attr('rx', 20)
  .attr('ry', 20)
  .attr('fill', '#f6b6c8');

/* hat */
let hat = drawing.append('rect')
  .attr('x', originX - 70)
  .attr('y', originY - 100)
  .attr('width', 50)
  .attr('height', 20)
  .attr('fill', 'blue');

  /* hat brim */
let hatBrim = drawing.append('rect')
  .attr('x', originX - 20)     
  .attr('y', originY - 85)    
  .attr('width', 15)
  .attr('height', 6)
  .attr('fill', '#8fc6ff');


    // Step 6: Replace this code with your drawing code.

    // Step 10: Modify your drawing code to CONDITIONALLY draw part of your drawing based on
    // the choice the user made in your selection menu (stored in variable "choice" above)

    if (choice === "alt") {
  drawing.append("line")
    .attr("x1", originX + 20)
    .attr("y1", originY - 20)
    .attr("x2", originX + 60)
    .attr("y2", originY - 60)
    .attr("stroke", "black")
    .attr("stroke-width", 3);
}

    /***** DO NOT ADD OR EDIT ANYTHING BELOW THIS LINE ******/
}
