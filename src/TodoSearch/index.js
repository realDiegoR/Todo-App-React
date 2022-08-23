import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css"

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext)

    const onSearchValueChange = (ev) => {
        setSearchValue(ev.target.value)
    }

    return (
        <React.Fragment>
            <input 
                className="TodoSearch" 
                placeholder="Buscar Todo..." 
                onChange={onSearchValueChange}
                value={searchValue}
            />
        </React.Fragment>
    )
}

export { TodoSearch }