import React from "react";
import { useD3 } from "../../hooks/useD3";
import * as d3 from 'd3';

export default function ConnectorComponent(props){

//   <svg height="400" width="450">
// <path id="lineAB" d="M 100 350 l 150 -300" stroke="red" stroke-width="3" fill="none" />
//   <path id="lineBC" d="M 250 50 l 150 300" stroke="red" stroke-width="3" fill="none" />
//   <path d="M 175 200 l 150 0" stroke="green" stroke-width="3" fill="none" />
//   <path d="M 100 350 q 150 -300 300 0" stroke="blue" stroke-width="5" fill="none" />
//   <!-- Mark relevant points -->
//   <g stroke="black" stroke-width="3" fill="black">
//     <circle id="pointA" cx="100" cy="350" r="3" />
//     <circle id="pointB" cx="250" cy="50" r="3" />
//     <circle id="pointC" cx="400" cy="350" r="3" />
//   </g>
//   <!-- Label the points -->
//   <g font-size="30" font-family="sans-serif" fill="black" stroke="none" text-anchor="middle">
//     <text x="100" y="350" dx="-30">A</text>
//     <text x="250" y="50" dy="-10">B</text>
//     <text x="400" y="350" dx="30">C</text>
//   </g>
//   Sorry, your browser does not support inline SVG.
// </svg>

  const ref = useD3(
        (svgconnector) => {
            svgconnector
                .style('position', 'absolute')
                .style('top', `${props.pos.top}.px`)
                .style('left', `${props.pos.left}.px`);

            svgconnector
                .append("path")
                .attr("d", "M 100 350 l 150 -300")
                .attr('stroke', 'red')
                .style("fill", "black");
            
            svgconnector.append('g')
                .append('circle')
                .attr('cx', 100)
                .attr('cy', 350)
                .attr('r', 3)
                .append('circle')
                .attr('cx', 250)
                .attr('cy', 50)
                .attr('r', 3)

        },
        []
    )    
    return(
        <svg 
            ref = {ref}
        />
    )
}

function dragstarted() {
  d3.select(this)
    .style('border','dashed 1px green');
}
  
function dragged(event) {
     d3.select(this)
       .style('top',`${event.y}.px`)
       .style('left', `${event.x}.px`);
 }
  
function dragended() {
    d3.select(this)
    .style('border','none');
}