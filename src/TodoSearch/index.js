import React from "react";
import "./TodoSearch.css"

function TodoSearch({ searchValue, setSearchValue }) {

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