import React from "react";
import { useNavigate } from "react-router-dom";
import { useTodos } from "../useTodos";

import { TodoHeader } from "../../ui/TodoHeader/TodoHeader";
import { TodoCounter } from "../../ui/TodoCounter/TodoCounter";
import { TodoSearch } from "../../ui/TodoSearch/TodoSearch";
import { TodoList } from "../../ui/TodoList/TodoList";
import { TodoItem } from "../../ui/TodoItem/TodoItem";
import { TodosError } from "../../ui/TodosError/TodosError";
import { TodosLoading } from "../../ui/TodosLoading/TodosLoading";
import { EmptyTodos } from "../../ui/EmptyTodos/EmptyTodos";


import { CreateTodoButton } from "../../ui/CreateTodoButton/CreateTodoButton";
// import { Modal } from "../../ui/Modal/modal";
import { ChangeAlert } from "../../ui/ChangeAlert/ChangeAlert";


// function App(){
// const [state, setState] = React.useState('Estado compartido en React');

//   return (
//     <React.Fragment>
//       <TodoHeader>
//         <TodoCounter />
//         <TodoSearch />
//       </TodoHeader>

//       <TodoList>
//         <TodoItem state={state}/>
//       </TodoList>
//     </React.Fragment>
//   );
// }
// function TodoHeader({children}){
//   return (
//     <header>
//       {children}
//     </header>
//   );
// }
// function TodoList({ children }){
//   return (
//     <section className="TodoList-container">
//       {children}
//     </section>
//   );
// }

// function TodoCounter(){
//   return <p>TodoCounter</p>;
// }
// function TodoSearch(){
//   return <p>TodoSearch</p>;
// }
// function TodoItem({ state }){
//   return <p>TodoItem: {state}</p>;
// }


function HomePage() {
  const navigate = useNavigate();
  const { states,statesUpdaters } = useTodos();

  const {
  //Propiedades:
  error,
  loading,
  searchedTodos,
  totalTodos,
  completedTodos,
  // openModal,
  searchValue,
  } = states;

  const {
  //Actualizadores:
  // setOpenModal,
  // addTodo,
  toggleCompleteTodo,
  deleteTodo,
  setSearchValue,
  sincronizeTodos,
  } = statesUpdaters;

  return (
    //React solo soporta que le envie 1 componente a la vez.
    //Es importante: encapsular en 1 solo componente. El resto de ellos.
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        searchText={searchValue}

        //Render Props.
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}

        onEmptySearchResults={
          (searchText) => <p>No hay resultados para {searchText}</p>
        }
      >
        {todo => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}

            onComplete={() => toggleCompleteTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
            onEdit={() => {
              navigate('/edit/' + todo.id,
                {
                  state: { todo }
                },
              );
            }}
          />
        )}
      </TodoList>

        {/* {!!openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
        )} */}

      {/*react interpreta las llaves vacias como un Fragment*/}
      <CreateTodoButton
      // setOpenModal={setOpenModal}
      onClick={() => navigate('/new')}
      />

      <ChangeAlert
        sincronize={sincronizeTodos}
      />
    </React.Fragment>
  );

}

export { HomePage };
// rfc y enter: nos crea todo el componente a utilizar.