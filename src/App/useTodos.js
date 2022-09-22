import React from "react"
import { useLocalStorage } from "./useLocalStorage"

function useTodos() {
    const { 
        item: todos, 
        saveItem: saveTodos,
        dataStatus,
        setdataStatus,
        setSyncronized
      } = useLocalStorage("TODOS_V1", [])
      

      const { loading, error } = dataStatus 
      
      const totalTodos = todos.length
      const completedTodos = todos.filter( todo => todo.completed).length
      const todosLeft = totalTodos - completedTodos

      const filterTodos = ( todo ) => {
        if (todosDisplayed === "all") {
          return todo
        }

        if (todosDisplayed === "active") {
          return !todo.completed
        }

        if (todosDisplayed === "completed") {
          return todo.completed
        }
      } 
      
      const completeTodos = (text) => {
        const clickedTodo = todos.find( todo => todo.text === text)
        clickedTodo.completed = !clickedTodo.completed
        saveTodos([...todos])
      }

      const addTodo = (text) => {
        const newTodo = {
          text,
          completed: false
        }
        saveTodos([...todos, newTodo])
      }
      
      const deleteTodos = (text) => {
        const clickedTodoIndex = todos.findIndex( todo => todo.text === text)
        todos.splice(clickedTodoIndex, 1) 
        saveTodos([...todos])
      }

      const deleteCompletedTodos = () => {
        const uncompletedTodos = todos.filter( todo => !todo.completed)
        saveTodos([...uncompletedTodos])
      }

      const syncronize = () => {
        setSyncronized(false)
        setdataStatus({...dataStatus, loading:true})
      }
      
      const [searchValue, setSearchValue] = React.useState('')

      const [darkTheme, setDarkTheme] = React.useState(false)
      const themeMode = darkTheme ? "Dark" : "Light"

      const [openModal, setOpenModal] = React.useState(false)

      const [todosDisplayed, setTodosDisplayed] = React.useState("all")

      const filteredTodos = todos.filter(filterTodos)


      return ({
        loading,
        error,
        todos,
        filteredTodos,
        todosLeft,
        searchValue,
        darkTheme,
        setDarkTheme,
        themeMode,
        setSearchValue,
        filterTodos,
        completeTodos,
        addTodo,
        deleteTodos,
        deleteCompletedTodos,
        todosDisplayed,
        setTodosDisplayed,
        openModal,
        setOpenModal,
        syncronize
      })
}

export { useTodos }