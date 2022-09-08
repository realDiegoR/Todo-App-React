import React from "react";
import { TodoContext } from "../TodoContext";
import { DataNotFound } from "../DataNotFound";
import ClipLoader from "react-spinners/ClipLoader";
import "./TodoList.scss"

function TodoList(props) {
    const { 
        themeMode,
        todos, 
        filterTodos, 
        loading, 
    } = React.useContext(TodoContext)
    
    const totalFilteredTodos = todos.filter(filterTodos).length

    if (loading) { 
       return (
        <div className="Spinner">
            <ClipLoader color={"#2F82DA"} loading={loading} size={100}/>
        </div>
       )
    }

    if (totalFilteredTodos === 0) {
        return <DataNotFound />
    } else { 
        return ( 
            <section className={`${themeMode}TodoList`}>
                <ul>
                    {props.children}
                </ul>
            </section>
        )
    }

}

export { TodoList }