import React from "react";
import { useLocalStorage } from "./LocalStogare";

function useTodos() {
  //Nos traemos todo el estado y las funciones de nuestra aplicación que queremos globales:
  const {
    item: todos,
    saveItem: saveTodos,
    sincronizeItem: sincronizeTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V2', []);

  //Estado de la busqueda
  const [searchValue, setSearchValue] = React.useState('');

  //Contidad de TODOs completados: ->
  //ESTADOS DERIVADOS:
  const completedTodos = todos.filter(todo => !!todo.completed).length;

  //Cantidad total de TODOs:
  const totalTodos = todos.length;

  // Creamos una nueva variable en donde guardaremos las coincidencias con la búsqueda
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  //Añadir TODO
  const addTodo = (text) => {
    const id = newTodoId(todos);
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
      id,
    });
    //Cada que el usuario interactúe con nuestra aplicación se guardarán los TODOs con nuestra nueva función
    saveTodos(newTodos);
  };

  const getTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    return todos[todoIndex];
  }

  //Completado TODO
  const toggleCompleteTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    // newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    //Cada que el usuario interactúe con nuestra aplicación se guardarán los TODOs con nuestra nueva función
    saveTodos(newTodos);
  };
  //Editar TODO
  const editTodo = (id, newText) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].text = newText;
    // newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    //Cada que el usuario interactúe con nuestra aplicación se guardarán los TODOs con nuestra nueva función
    saveTodos(newTodos);
  };

  //Eliminar TODO
  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    //Cada que el usuario interactúe con nuestra aplicación se guardarán los TODOs con nuestra nueva función
    saveTodos(newTodos);
    // Retornamos nuestro proveedor con nuestro contexto en la etiqueta value, que recibirá a toda
    //nuestra aplicación, por eso necesitamos la props children
  };
  const states = {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    getTodo,
  };
  const statesUpdaters = {
    setSearchValue,
    addTodo,
    toggleCompleteTodo,
    editTodo,
    deleteTodo,
    sincronizeTodos,
  };
  return { states, statesUpdaters };
}

function newTodoId(todoList){
  if(!todoList.length){
   return 1;
  }

  const idList = todoList.map(todo => todo.id);
  const idMax = Math.max(...idList);
  return idMax + 1;
}

export { useTodos };
