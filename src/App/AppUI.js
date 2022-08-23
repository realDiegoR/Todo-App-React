import React from "react";

import '../index.css';
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { TodoList } from "../TodoList";
import { Header } from "../Header"
import { TodoSearch } from "../TodoSearch"
import { CreateTodoButton } from "../CreateTodoButton"
import { Modal } from "../Modal"

function AppUI() {
    const {
        error,
        loading,
        todos,
        searchValue,
        filterTodos,
        completeTodos,
        deleteTodos,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)

    return (
        <React.Fragment>
            <Header>
                <TodoCounter />
                <TodoSearch />
            </Header>
                <TodoList>
                    {error && <p>Desespérate, hubo un error.</p>}
                    {loading && !error && <p>Estamos cargando, no desesperes...</p>}
                    {(!loading && !todos.length) && <p>Crea tu primer TODO!</p>}

                    {todos.filter(filterTodos).map( todo => (
                    <TodoItem 
                        key={todo.text} 
                        text={todo.text}
                        completed={todo.completed}
                        searchValue={searchValue}
                        onComplete={completeTodos}
                        onDelete={deleteTodos}
                    />
                    ))}
                </TodoList>

                {openModal && (
                    <Modal>
                        <TodoForm 
                            setOpenModal={setOpenModal}
                        />
                    </Modal>
                )}


            <CreateTodoButton 
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    )
}

export { AppUI }