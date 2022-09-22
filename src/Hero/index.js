import React from "react";
import "./Hero.scss"

function Hero({ themeMode }) {

    return (
        <div className={`${themeMode}Hero`} />
    )
}

export { Hero }