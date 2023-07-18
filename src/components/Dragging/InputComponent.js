import React from "react";
import { useD3 } from "../../hooks/useD3";
import * as d3 from 'd3';

export default function InputComponent(props){

  const ref = useD3(
        (input) => {
            input
             .style('position', 'absolute')
             .style('width', '150px')
             .style('height', '30px')
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
        <input 
            ref = {ref}
        />
    )
}

function dragstarted() {
  d3.select(this)
    .style('border','solid 1px green')
}
  
function dragged(event){
     d3.select(this)
       .style('top',`${event.y+50}.px`)
       .style('left', `${event.x}.px`);
  }
  
  function dragended(){
    d3.select(this)
    .style('border','solid 1px')
  }