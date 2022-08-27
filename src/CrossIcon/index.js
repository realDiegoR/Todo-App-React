import React from "react";
import "./CrossIcon.css"

function CrossIcon(props) {
    return (
        <div 
            className="CrossIcon" 
            onClick={props.onClick}
        />
    )
}

export { CrossIcon }