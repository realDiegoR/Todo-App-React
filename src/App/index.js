import React from "react"
import { AppUI } from "./AppUI"


function useLocalStorage(itemName, initialValue) {
  const [dataStatus, setdataStatus] = React.useState({loading:true, error:false})
  const [item, setItem] = React.useState(initialValue)


  React.useEffect( () => {
    setTimeout( () => {
      if (!localStorage.getItem(itemName)) {
        localStorage.setItem(itemName, JSON.stringify(initialValue))
      } 
      
      const localStorageItem = localStorage.getItem(itemName)
      const parsedItem = JSON.parse(localStorageItem)

      setItem(parsedItem)
      setdataStatus({...dataStatus, loading:false})
    }, 2000)
  }, [])


  const saveItem = (newItem) => {
    const stringifiedItems = JSON.stringify(newItem)
    localStorage.setItem(itemName, stringifiedItems)
    setItem(newItem)
  }

  return {
    item,
    saveItem,
    dataStatus
  }
}  


function App(props) {
  const { 
    item: todos, 
    saveItem: saveTodos,
    dataStatus
  } = useLocalStorage("TODOS_V1", [])
  
  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter( todo => todo.completed === true)

  const filterTodos = ( todo ) => todo.text.toLowerCase().includes(searchValue.toLowerCase())

  

  const completeTodos = (text) => {
    const clickedTodo = todos.find( todo => todo.text === text)
    clickedTodo.completed = !clickedTodo.completed
    saveTodos([...todos])
}

  const deleteTodos = (text) => {
    const clickedTodoIndex = todos.findIndex( todo => todo.text === text)
    todos.splice(clickedTodoIndex, 1) 
    saveTodos([...todos])
  }

  return (
    <AppUI 
      loading={dataStatus.loading}
      error={dataStatus.error}
      todos={todos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      filterTodos={filterTodos}
      completeTodos={completeTodos}
      deleteTodos={deleteTodos}
    />
  );
}

export default App;
