import React from "react"
import { TodoContext } from "../TodoContext"
import "./TodoCounter.css"

function TodoCounter(){
    const {totalTodos, completedTodos, deleteCompletedTodos } = React.useContext(TodoContext)

    return (
        <section className="TodoCounter">
            <span>{totalTodos - completedTodos} items left</span>
            <span
            className="Clickeable"
                onClick={deleteCompletedTodos}
            >Clear Completed</span>
        </section>
        //     <React.Fragment>
        //     <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs </h2>
        // </React.Fragment>
    )
}

export { TodoCounter }