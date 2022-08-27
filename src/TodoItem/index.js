import React from "react";
import { CheckCircle } from "../CheckCircle";
import { CrossIcon } from "../CrossIcon";
import { TodoContext } from "../TodoContext";
import "./TodoItem.css"

function TodoItem(props) {
    const { 
        completeTodos,
        deleteTodos
    } = React.useContext(TodoContext)

    return (
        <li className={`TodoItem`}>
            <CheckCircle 
                checkIcon={props.completed && true}
                onClick={() => completeTodos(props.text)}
                />
            <p 
                className={props.completed ? "TodoItem__text--completed" : undefined}
            >{props.text}</p>
            <CrossIcon 
                onClick={() => deleteTodos(props.text)}
            />
        </li>
    )
}

export { TodoItem }