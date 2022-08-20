import React from "react";
import "./CreateTodoButton.css"

function CreateTodoButton() {
    return (
      <button 
        className="CreateTodoButton"
        onClick={() => alert(2)}
      >+</button>
    )
}

export { CreateTodoButton }