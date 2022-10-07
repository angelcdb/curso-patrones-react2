import React from "react";
import "../CreateTodoButton/CreateTodoButton.css";

function CreateTodoButton(props) {
  return (
    <button className="CreateTodoButton"
    onClick={props.onClick}>
      +
    </button>
  );
}
//Export nombrados(Asi se evita problemas)
export { CreateTodoButton };
