import React from "react";

import '../index.css';
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { Header } from "../Header"
import { TodoSearch } from "../TodoSearch"
import { CreateTodoButton } from "../CreateTodoButton"

function AppUI({
    loading,
    error,
    todos,
    completedTodos,
    searchValue,
    setSearchValue,
    filterTodos,
    completeTodos,
    deleteTodos
}) {
    return (
        <React.Fragment>
            <Header>
                <TodoCounter 
                total={todos.length}
                completed={completedTodos.length}
                />
                <TodoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                />
            </Header>
                {error && <p>Desespérate, hubo un error.</p>}
                {loading && <p>Estamos cargando, no desesperes...</p>}
                {(!loading && !todos.length) && <p>Crea tu primer TODO!</p>
                }

                <TodoList>
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
            <CreateTodoButton />
        </React.Fragment>
    )
}

export { AppUI }