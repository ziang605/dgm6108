"use strict";

/* ===============================
   Configuration variables */
let svgWidth = 720;
let svgHeight = 450;
let margin = 40;
let legendWidth = 180;

/* Resize div to match width of visualization. */
d3.select("#container")
  .style("width", String(svgWidth) + "px");

/* Create drawing canvas */
let svg = d3.select("#canvas")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

/* Draw canvas border */
svg.append("rect")
  .attr("fill", "none")
  .attr("stroke", "black")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

/* Plot area (leave right space for legend so it never overlaps points) */
let plotLeft = margin;
let plotTop = margin;
let plotRight = svgWidth - margin - legendWidth;
let plotBottom = svgHeight - margin;

/* Draw plot area border (dashed guide) */
svg.append("rect")
  .attr("fill", "none")
  .attr("stroke", "black")
  .attr("stroke-dasharray", "5")
  .attr("x", plotLeft)
  .attr("y", plotTop)
  .attr("width", plotRight - plotLeft)
  .attr("height", plotBottom - plotTop);

let dataset = [
  { gapHours: 14.78, sleepLatencyMin: 4,  stressLevel: 3 },  // 21/01
  { gapHours: 12.42, sleepLatencyMin: 15, stressLevel: 3 },  // 22/01
  { gapHours: 14.37, sleepLatencyMin: 9,  stressLevel: 3 },  // 23/01
  { gapHours: 14.05, sleepLatencyMin: 13, stressLevel: 3 },  // 26/01
  { gapHours: 14.47, sleepLatencyMin: 17, stressLevel: 3 },  // 27/01
  { gapHours: 14.03, sleepLatencyMin: 27, stressLevel: 3 },  // 28/01
  { gapHours: 12.38, sleepLatencyMin: 5,  stressLevel: 2 },  // 29/01
  { gapHours: 13.92, sleepLatencyMin: 5,  stressLevel: 2 },  // 02/02
  { gapHours: 14.18, sleepLatencyMin: 5,  stressLevel: 4 },  // 03/02
  { gapHours: 13.35, sleepLatencyMin: 6,  stressLevel: 2 },  // 04/02
  { gapHours: 11.97, sleepLatencyMin: 5,  stressLevel: 4 },  // 05/02
  { gapHours: 14.42, sleepLatencyMin: 6,  stressLevel: 3 },  // 06/02
  { gapHours: 13.78, sleepLatencyMin: 7,  stressLevel: 2 },  // 09/02
  { gapHours: 12.77, sleepLatencyMin: 49, stressLevel: 3 }   // 10/02
];

/* Max values for labels */
let xMax = d3.max(dataset, function (d) { return d.gapHours; });
let yMax = d3.max(dataset, function (d) { return d.sleepLatencyMin; });

/* Keep origin at 0 for the required 0,0 label */
let xDomainMax = Math.ceil(xMax + 1);
let yDomainMax = Math.ceil(yMax + 5);

/* Scales (class style: scaleLinear + domain + range) */
let xScale = d3.scaleLinear()
  .domain([0, xDomainMax])
  .range([plotLeft, plotRight]);

let yScale = d3.scaleLinear()
  .domain([0, yDomainMax])
  .range([plotBottom, plotTop]);

let rScale = d3.scaleLinear()
  .domain([1, 4])
  .range([4, 18]);

/* Plot points (class style: selectAll + data + join) */
let circles = svg.selectAll("circle.dataPoint")
  .data(dataset)
  .join("circle")
  .attr("class", "dataPoint");

circles
  .attr("cx", function (d) { return xScale(d.gapHours); })
  .attr("cy", function (d) { return yScale(d.sleepLatencyMin); })
  .attr("r", function (d) { return rScale(d.stressLevel); })
  .attr("fill", "black")
  .attr("opacity", 0.75);

/**** Axis labels (units included) ****/
svg.append("text")
  .attr("x", (plotLeft + plotRight) / 2)
  .attr("y", svgHeight - 10)
  .attr("text-anchor", "middle")
  .text("Gap Before Bed (hours)");

svg.append("text")
  .attr("x", -svgHeight / 2)
  .attr("y", 15)
  .attr("text-anchor", "middle")
  .attr("alignment-baseline", "middle")
  .text("Sleep Latency (minutes)")
  .attr("transform", "rotate(-90)");

/**** Key coordinate labels ****/
/* Origin label */
svg.append("text")
  .attr("x", xScale(0))
  .attr("y", plotBottom + 18)
  .attr("text-anchor", "middle")
  .text("0,0");

/* X max label */
svg.append("text")
  .attr("x", xScale(xDomainMax))
  .attr("y", plotBottom + 18)
  .attr("text-anchor", "middle")
  .text(String(xDomainMax));

/* Y max label */
svg.append("text")
  .attr("x", plotLeft - 6)
  .attr("y", yScale(yDomainMax))
  .attr("text-anchor", "end")
  .attr("alignment-baseline", "middle")
  .text(String(yDomainMax));

/* ===============================
   LEGEND (inside SVG, in right whitespace)
*/
let legendX = plotRight + 30;
let legendTitleY = plotTop + 20;

svg.append("text")
  .attr("x", legendX)
  .attr("y", legendTitleY)
  .text("Stress Level");

let levels = [1, 3, 4];

for (let i = 0; i < levels.length; i = i + 1) {
  let v = levels[i];
  let cy = legendTitleY + 30 + (i * 55);

  svg.append("circle")
    .attr("cx", legendX + 10)
    .attr("cy", cy)
    .attr("r", rScale(v))
    .attr("fill", "black")
    .attr("opacity", 0.75);

  svg.append("text")
    .attr("x", legendX + 40)
    .attr("y", cy + 5)
    .text("Level " + v);
}