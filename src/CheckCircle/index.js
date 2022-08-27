import React from "react";
import "./CheckCircle.css"

function CheckCircle(props) {
    const path = `${process.env.PUBLIC_URL}/images/`

    return (
        <div 
            className={`CheckCircle ${props.checkIcon ? "CheckCircle-active" : undefined}`}
            onClick={props.onClick}
        >
            <img 
                src={`${path}icon-check.svg`}
                style={props.checkIcon ? {} : {opacity:0} }
            />
        </div>
    )
}

export { CheckCircle }