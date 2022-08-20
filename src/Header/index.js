import React from "react";
import "./Header.css"

function Header(props) {
    return (
        <header className="Header">
            <h1>My Todo App</h1>
            {props.children}
        </header>
    )
}

export { Header }