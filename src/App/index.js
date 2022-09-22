import React from "react"
import { useTodos } from "./useTodos";
import { Hero } from "../Hero";
import { MainContainer } from "../MainContainer"
import { ThemeSwitcher } from "../ThemeSwitcher"
import { TodoCreator } from "../TodoCreator";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoDisplayer } from "../TodoDisplayer";
import { TodoList } from "../TodoList";
import { Header } from "../Header"
import { Spinner } from "../Spinner";
import { DataNotFound } from "../DataNotFound";
import { ChangeAlert } from "../ChangeAlert";
// import { TodoForm } from "../TodoForm";
// import { TodoSearch } from "../TodoSearch"
// import { CreateTodoButton } from "../CreateTodoButton"
// import { Modal } from "../Modal"


function App() {
  const {
    loading,
    todos,
    searchValue,
    filterTodos,
    darkTheme, 
    setDarkTheme,
    addTodo, 
    themeMode,
    todosLeft, 
    filteredTodos,
    deleteCompletedTodos,
    todosDisplayed, 
    setTodosDisplayed,
    completeTodos,
    deleteTodos,
    syncronize
  } = useTodos()

  const totalFilteredTodos = filteredTodos.length

  return (
    <React.Fragment>
        <Hero themeMode={themeMode}/>
        <MainContainer>
            <Header>
              <ThemeSwitcher  darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
              <TodoCreator todos={todos} addTodo={addTodo} themeMode={themeMode}/>
            </Header>
            <TodoList 
                loading={loading}
                filteredTodos={filteredTodos}
                totalFilteredTodos={totalFilteredTodos} 
                themeMode={themeMode}
                onLoading={ <Spinner />}
                onEmptyDisplayedTodos={() => <DataNotFound todosDisplayed={todosDisplayed} themeMode={themeMode} />}
                render={ todo => (
                    <TodoItem 
                        key={todo.text} 
                        text={todo.text}
                        completed={todo.completed}
                        searchValue={searchValue}
                        loading={loading}
                        completeTodos={completeTodos}
                        deleteTodos={deleteTodos}
                        themeMode={themeMode}
                    />
                )}
              > 
                {<TodoCounter themeMode={themeMode} todosLeft={todosLeft} deleteCompletedTodos={deleteCompletedTodos}/>}
              </TodoList>
              {/* {(() => {
                  if (loading) return <Spinner />
                  if (totalFilteredTodos === 0) return <DataNotFound todosDisplayed={todosDisplayed} themeMode={themeMode}/>
                  return (
                    todos.filter(filterTodos).map( todo => (
                        <TodoItem 
                            key={todo.text} 
                            text={todo.text}
                            completed={todo.completed}
                            searchValue={searchValue}
                            loading={loading}
                            completeTodos={completeTodos}
                            deleteTodos={deleteTodos}
                            themeMode={themeMode}
                        />
                    ))
                  )
              })()}
              
              
            </TodoList> */}
          <TodoDisplayer themeMode={themeMode} todosDisplayed={todosDisplayed} setTodosDisplayed={setTodosDisplayed}/>
      </MainContainer>
      <ChangeAlert syncronize={syncronize}/>


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
  );
}

export default App;
