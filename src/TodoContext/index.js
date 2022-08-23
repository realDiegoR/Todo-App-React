import React from "react"
import { useLocalStorage } from "./useLocalStorage"

const TodoContext = React.createContext()

function TodoProvider(props) {
    const { 
        item: todos, 
        saveItem: saveTodos,
        dataStatus
      } = useLocalStorage("TODOS_V1", [])
      
      const { loading, error } = dataStatus
      
      const totalTodos = todos.length
      const completedTodos = todos.filter( todo => todo.completed === true).length
      const filterTodos = ( todo ) => todo.text.toLowerCase().includes(searchValue.toLowerCase())
      
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
      
      const [searchValue, setSearchValue] = React.useState('')

      const [openModal, setOpenModal] = React.useState(false)

      return (
        <TodoContext.Provider value={{
            loading,
            error,
            todos,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            filterTodos,
            completeTodos,
            addTodo,
            deleteTodos,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }