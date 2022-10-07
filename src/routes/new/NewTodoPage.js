import React from "react";
import { TodoForm } from "../../ui/TodoForm/TodoForm";
import { useTodos } from "../useTodos";

function NewTodoPage() {
    const { statesUpdaters } = useTodos();
    const { addTodo } = statesUpdaters;

  return <TodoForm
    label="Escribe tu nuevo TODO"
    submitText="Añadir"
    submitEvent={(text) => addTodo(text)}
    />;
}

export { NewTodoPage };
