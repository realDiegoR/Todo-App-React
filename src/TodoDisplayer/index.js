import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoDisplayer.scss"

function TodoDisplayer() {
    const { 
        todosDisplayed, 
        setTodosDisplayed,
        themeMode
    } = React.useContext(TodoContext)

    const onClick = (e) => {
        setTodosDisplayed(e.target.innerText.toLowerCase())
    }

    const displayMode = (mode) => {
        if (todosDisplayed === mode) return "Active"
        if (todosDisplayed === mode) return "Active"
        if (todosDisplayed === mode) return "Active"
        return undefined
    }

    return (
        <div className={`${themeMode}TodoDisplayer`}>
            <span
                className={displayMode("all")}
                onClick={onClick}
            >All</span>
            <span
                className={displayMode("active")}
                onClick={onClick}
            
            >Active</span>
            <span
                className={displayMode("completed")}
                onClick={onClick}
            >Completed</span>
        </div>
    )
}

export { TodoDisplayer }