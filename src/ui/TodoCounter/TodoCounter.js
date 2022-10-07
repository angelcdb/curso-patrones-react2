import React from "react";
import "../TodoCounter/TodoCounter.css";

function TodoCounter({ totalTodos, completedTodos, loading }) {
  return (
    <>
    <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
    <h1 className="Todo-welcome">Bienvenidos a TODO Machine</h1>
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
    </>
  );
}
//Export nombrados(Asi se evita problemas)
export { TodoCounter };
