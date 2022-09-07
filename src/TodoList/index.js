import React from "react";
import { TodoContext } from "../TodoContext";
import ClipLoader from "react-spinners/ClipLoader";
import "./TodoList.scss"

function TodoList(props) {
    const { 
        themeMode,
        todosDisplayed,
        todos, 
        filterTodos, 
        loading, 
    } = React.useContext(TodoContext)

    const path = `${process.env.PUBLIC_URL}/images/`
    const totalFilteredTodos = todos.filter(filterTodos).length
    const notFoundTokens = {
        all: {
            image: `${path}undraw_to_do_re_jaef.svg`,
            text: "Start creating todos!"
        },
        active: {
           image: `${path}undraw_completing_re_i7ap.svg`,
           text: "Congratulations! No todos left!"
        },
        completed: {
           image: `${path}undraw_completed_tasks_vs6q.svg`,
           text: "Oh... you better be completing your todos."
        }
    }

    let content;

    if (totalFilteredTodos === 0) { //todos.filter(filterTodos)
        content = (
            <section className={`TodoList`}>
                <img src={notFoundTokens[todosDisplayed]["image"]} className="TodoListImage" alt="not found" />
                <p className="TodoListText">{notFoundTokens[todosDisplayed]["text"]}</p>
            </section>
        )
    } else {

        content = ( 
            <section className={`${themeMode}TodoList`}>
                <ul>
                    {props.children}
                </ul>
            </section>
        )
    }

    if (loading) {
       content = (
        <div className="Spinner">
            <ClipLoader color={"#2F82DA"} loading={loading} size={100}/>
        </div>
       )
    }

    return content;
}

export { TodoList }