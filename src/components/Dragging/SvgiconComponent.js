import React from "react";
import { useD3 } from "../../hooks/useD3";
import * as d3 from 'd3';

export default function SvgIconsComponent(props){

  const ref = useD3(
        (svgicon) => {
            svgicon
            .attr('width', '42')
            .attr('height', '42')
            .style('position', 'absolute')
            .style('top', `${props.pos.top}.px`)
            .style('left', `${props.pos.left}.px`)
            .call(d3.drag()
                .on('start', dragstarted)
                .on('drag', dragged)
                .on('end', dragended));
        
            svgicon.append('circle')
                .attr('cx', 20)
                .attr('cy', 20)
                .attr("r", 20)
                .attr("fill", "green");
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
    .style('border','dashed 1px green')
}
  
function dragged(event){
     d3.select(this)
       .style('top',`${event.y+40}.px`)
       .style('left', `${event.x+40}.px`);
  }
  
  function dragended(){
    d3.select(this)
    .style('border','none')
  }