import React from "react";

import { TodoContext } from "../TodoContext";
import { Hero } from "../Hero";
import { MainContainer } from "../MainContainer"
import { ThemeSwitcher } from "../ThemeSwitcher"
import { TodoCreator } from "../TodoCreator";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoDisplayer } from "../TodoDisplayer";
// import { TodoForm } from "../TodoForm";
import { TodoList } from "../TodoList";
import { Header } from "../Header"
// import { TodoSearch } from "../TodoSearch"
// import { CreateTodoButton } from "../CreateTodoButton"
// import { Modal } from "../Modal"

function AppUI() {
    const {
        loading,
        error,
        todos,
        searchValue,
        filterTodos,
    } = React.useContext(TodoContext)

    return (
        <React.Fragment>
            <Hero />
            <MainContainer>
                <Header>
                    <ThemeSwitcher />
                    <TodoCreator />
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
                            loading={loading}
                        />
                    ))  
                    }
                    <TodoCounter />
                </TodoList>
                <TodoDisplayer />
            </MainContainer>


            {/* <Header>
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
            /> */}
        </React.Fragment>
    )
}

export { AppUI }