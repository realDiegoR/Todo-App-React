import React from "react";
import "./MainContainer.css"

function MainContainer(props) {
    return (
        <main className="MainContainer">
            {props.children}
        </main>
    )
}

export { MainContainer }