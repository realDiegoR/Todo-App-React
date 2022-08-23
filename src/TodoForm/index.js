import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css"

function TodoForm() {
    const [newTodoValue, setnewTodoValue] = React.useState("")

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)

    const onCancel = () => {
        setOpenModal(false)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (newTodoValue.length) {
            addTodo(newTodoValue)
        }
        setOpenModal(false)
    }

    const onChange = (e) => {
        setnewTodoValue(e.target.value)
    }

    return (
        <form onSubmit={onSubmit} className="TodoForm">
            <label>Crea tu nuevo Todo!</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Nueva tarea..."
            />
            <div>
                <button
                    onClick={onCancel}
                    type="button"
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                >
                    Agregar
                </button>
            </div>
        </form>
    )
}

export { TodoForm }