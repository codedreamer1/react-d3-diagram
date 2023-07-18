import React from "react";
import { useD3 } from "../../hooks/useD3";
import * as d3 from 'd3';

export default function ImageComponent(props){

  const ref = useD3(
        (img) => {
            img
             .attr('src', './icons/image.png')
             .style('position', 'absolute')
             .style('width', '100px')
             .style('height', '100px')
             .style('top', `${props.pos.top}.px`)
             .style('left', `${props.pos.left}.px`)
             .call(d3.drag()
                .on('start', dragstarted)
                .on('drag', dragged)
                .on('end', dragended));
        },
        []
    )    
    return(
        <img 
            ref = {ref}
            alt="d3image"
            id="hello"
        />
    )
}

function dragstarted() {
  d3.select(this)
    .style('border','solid 1px green')
}
  
function dragged(event){
     d3.select(this)
       .style('top',`${event.y}.px`)
       .style('left', `${event.x}.px`);
  }
  
  function dragended(){
    d3.select(this)
    .style('border','none')
  }