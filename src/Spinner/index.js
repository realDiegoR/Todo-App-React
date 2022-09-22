import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "./Spinner.css"

function Spinner () {
    return (
        <div className="Spinner">
            <ClipLoader color={"#2F82DA"} size={100}/>
        </div>
    )
}

export { Spinner }