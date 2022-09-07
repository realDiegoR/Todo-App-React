import React from "react";
import { TodoContext } from "../TodoContext";
import "./Hero.scss"

function Hero() {
    const { themeMode } = React.useContext(TodoContext) 

    return (
        <div className={`${themeMode}Hero`} />
    )
}

export { Hero }