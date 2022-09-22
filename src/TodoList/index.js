import React from "react";
import "./TodoList.scss"

function TodoList(props) {

    return (
        <section className={(!props.loading && !!props.totalFilteredTodos) ? `${props.themeMode}TodoList` : `TodoList`}>
            {props.loading && props.onLoading}
            {!props.loading && !props.totalFilteredTodos && props.onEmptyDisplayedTodos()}

            <ul>
                {!props.loading && props.filteredTodos.map(props.render) }
            </ul>
            
            {!props.loading && !!props.totalFilteredTodos && props.children}
        </section>
    )
}

export { TodoList }