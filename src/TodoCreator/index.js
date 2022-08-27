import React from "react";
import { CheckCircle } from "../CheckCircle";
import { TodoContext } from "../TodoContext";
import "./TodoCreator.css"

function TodoCreator() {
    const { todos, addTodo } = React.useContext(TodoContext)
    const [newTodoValue, setnewTodoValue] = React.useState("")

    const isValid = (newTodoValue) => {
        if (newTodoValue.length === 0) return false;
        if (todos.some( todo => todo.text === newTodoValue )) return false
        return true
    }

    const onClick = (newTodoValue) => {
        if (!isValid(newTodoValue)) return ;
        addTodo(newTodoValue)
        setnewTodoValue("")
    }

    const onChange = (e) => {
        setnewTodoValue(e.target.value)
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            if (!isValid(newTodoValue)) return ;
            addTodo(newTodoValue)
            setnewTodoValue("")
        }
    }

    return (
        <div className="TodoCreator">
            <CheckCircle 
                onClick={() => onClick(newTodoValue)}
            />
            <input
                placeholder="Create a new todo..." 
                value={newTodoValue}
                onChange={onChange}
                onKeyDown={handleKeyDown}
             />
        </div>
    )
}

export { TodoCreator }