import React, { useState } from "react";
import { Droppable } from "react-drag-and-drop";
import InputComponent from "../../components/Dragging/InputComponent";
import ImageComponent from "../../components/Dragging/ImageComponent";
import LabelComponent from "../../components/Dragging/LabelComponent";
import SvgIconsComponent from "../../components/Dragging/SvgiconComponent";
import ConnectorComponent from "../../components/Dragging/ConnecterComponent";



export default function WidgetBody(){

    const [isEditing, setEditingState] = useState(false);

    const [ImagesOnCanvas, setImagesOnCanvas] = useState([]);
    const [InputsOnCanvas, setInputsOnCanvas] = useState([]);
    const [LabelsOnCanvas, setLabelsOnCanvas] = useState([]);
    const [SvgIconsOnCanvas, setSvgIconsOnCanvas] = useState([]);
    const [ConnectorsOnCanvas, setConnectorsOnCanvas] = useState([]);


    const handleDrop = (event, data) => {
        const pos = {
            top : data.clientY,
            left : data.clientX,
        }
        if(!isEditing){
            setEditingState(true);
        }
        
        if(event.tag === "Image"){
            const id = ImagesOnCanvas.length;
            setImagesOnCanvas([...ImagesOnCanvas, <ImageComponent pos={pos} key = {id} />]);
        }

        if(event.tag === "Input"){
            const id = InputsOnCanvas.length;
            setInputsOnCanvas([...InputsOnCanvas, <InputComponent  pos={pos}  key={id}/>]);
        }

        if(event.tag === "Label"){
            const id = LabelsOnCanvas.length;
            setLabelsOnCanvas([...LabelsOnCanvas, <LabelComponent  pos={pos}  key={id}/>]);
        }

        if(event.tag === "Svg icon"){
            const id = SvgIconsOnCanvas.length;
            setSvgIconsOnCanvas([...SvgIconsOnCanvas, <SvgIconsComponent  pos={pos}  key={id}/>]);
        }

        if(event.tag === "Connecter"){
            const id = ConnectorsOnCanvas.length;
            setConnectorsOnCanvas([...ConnectorsOnCanvas, <ConnectorComponent  pos={pos}  key={id}/>]);
        }
    }; 

    return(
         <Droppable
           style = {{height : "100%"}}
           types = {["tag"]}
           onDrop = {handleDrop}
         >
            <div className={"widget-body"}>
                {
                    !isEditing&&(
                        <p>Drag and Drop widgets from the WidgetPanel</p>
                    )
                }
                { ImagesOnCanvas }
                { InputsOnCanvas }
                { LabelsOnCanvas }
                { SvgIconsOnCanvas }
                { ConnectorsOnCanvas }
            </div>
         </Droppable>
    )

}