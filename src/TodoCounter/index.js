import React from "react"
import "./TodoCounter.scss"

function TodoCounter({ todosLeft, themeMode, deleteCompletedTodos }){

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