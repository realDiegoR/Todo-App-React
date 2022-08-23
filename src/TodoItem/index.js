import React from "react";
import "./TodoItem.css"

function TodoItem(props) {

    return (
        <li className={`TodoItem ${props.completed ? "TodoItem__text--completed" : undefined}`}>
            <span 
                className={`Icon-check ${props.completed && "Icon-check-active"}`}
                onClick={() => props.onComplete(props.text)}
            >C</span>
            <p 
                className={props.completed ? "TodoItem__text--completed" : undefined}
            >{props.text}</p>
            <span 
                className="Icon-delete"
                onClick={() => props.onDelete(props.text)}
            >X</span>
        </li>
    )
}

export { TodoItem }