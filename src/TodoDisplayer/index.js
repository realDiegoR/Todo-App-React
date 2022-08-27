import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoDisplayer.css"

function TodoDisplayer() {
    const { todosDisplayed, setTodosDisplayed } = React.useContext(TodoContext)

    const onClick = (e) => {
        setTodosDisplayed(e.target.innerText.toLowerCase())
    }

    return (
        <div className="TodoDisplayer">
            <span
                className={todosDisplayed === "all" ? "Active" : undefined}
                onClick={onClick}
            >All</span>
            <span
                className={todosDisplayed === "active" ? "Active" : undefined}
                onClick={onClick}
            
            >Active</span>
            <span
                className={todosDisplayed === "completed" ? "Active" : undefined}
                onClick={onClick}
            
            >Completed</span>
        </div>
    )
}

export { TodoDisplayer }