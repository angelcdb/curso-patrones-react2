import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { TodoForm } from "../../ui/TodoForm/TodoForm";
import { useTodos } from "../useTodos";

function EditTodoPage() {
  const location = useLocation();
  const params = useParams();
  const id = Number(params.id);

  //Traemos a useTodos
  const { states, statesUpdaters } = useTodos();
  const { loading, getTodo } = states;
  const { editTodo } = statesUpdaters;

  let todoText;

  if(location.state?.todo){
    todoText = location.state.todo.text;

  } else if(loading) {
    return <p>Cargando...</p>;

  } else {
    const todo = getTodo(id);
    todoText = todo.text;
  }
  return (
    <TodoForm
      label="Edita tu TODO"
      defaultTodoText={todoText}
      submitText="Editar"
      submitEvent={(newText) => editTodo(id, newText)}
    />
  );
}

export { EditTodoPage };
