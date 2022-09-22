import React from "react";
import "./DataNotFound.scss"

function DataNotFound({ todosDisplayed, themeMode }) {

    const path = `${process.env.PUBLIC_URL}/images/`
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

    return (
        <div className={`${themeMode}EmptyTodoList`}>
            <img src={notFoundTokens[todosDisplayed]["image"]} className={`TodoListImage`} 
             alt="not found" />
            <p className={`${themeMode}TodoListText`}>{notFoundTokens[todosDisplayed]["text"]}</p>
        </div>
    )
}

export {DataNotFound}