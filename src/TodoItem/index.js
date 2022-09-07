import React from "react";
import { CheckCircle } from "../CheckCircle";
import { CrossIcon } from "../CrossIcon";
import { TodoContext } from "../TodoContext";
import "./TodoItem.scss"

function TodoItem(props) {
    const { 
        completeTodos,
        deleteTodos,
        themeMode
    } = React.useContext(TodoContext)

    return (
        <li className={`${themeMode}TodoItem`}>
            <CheckCircle 
                checkIcon={props.completed && true}
                onClick={() => completeTodos(props.text)}
                />
            <p 
                className={props.completed ? `${themeMode}TodoItem__text--completed` : undefined}
            >{props.text}</p>
            <CrossIcon 
                onClick={() => deleteTodos(props.text)}
            />
        </li>
    )
}

export { TodoItem }