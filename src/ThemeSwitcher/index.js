import React from "react";
import "./ThemeSwitcher.css"
const body = document.querySelector("body")

function ThemeSwitcher({ darkTheme, setDarkTheme }) {
    const path = `${process.env.PUBLIC_URL}/images/`
    
    if (darkTheme) {
        body.className = "DarkTheme"
    } else {
        body.className = ""
    }
    return (
        <div className="ThemeSwitcher">
            <h1>TODO</h1>
            <img 
                src={darkTheme ? `${path}icon-sun.svg` : `${path}icon-moon.svg`} 
                alt="Icon"
                onClick={() => setDarkTheme(prevState => !prevState)}
            />
        </div>
    )
}

export { ThemeSwitcher }