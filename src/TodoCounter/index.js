import React from "react"
import { TodoContext } from "../TodoContext"
import "./TodoCounter.scss"

function TodoCounter(){
    const {
        todosLeft, 
        themeMode,
        deleteCompletedTodos,
        darkTheme
    } = React.useContext(TodoContext)


    return (
        <section className={`${themeMode}TodoCounter`}>
            <span>{todosLeft} items left</span>
            <span
                className="Clickeable"
                onClick={deleteCompletedTodos}
            >Clear Completed</span>
        </section>
    )
}

export { TodoCounter }