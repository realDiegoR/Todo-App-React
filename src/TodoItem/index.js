import React from "react";
import { CheckCircle } from "../CheckCircle";
import { CrossIcon } from "../CrossIcon";
import "./TodoItem.scss"

function TodoItem(props) {

    return (
        <li className={`${props.themeMode}TodoItem`}>
            <CheckCircle 
                checkIcon={props.completed && true}
                onClick={() => props.completeTodos(props.text)}
                />
            <p 
                className={props.completed ? `${props.themeMode}TodoItem__text--completed` : undefined}
            >{props.text}</p>
            <CrossIcon 
                onClick={() => props.deleteTodos(props.text)}
            />
        </li>
    )
}

export { TodoItem }