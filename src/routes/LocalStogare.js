import React from "react";

//React Custom Hook
function useLocalStorage(itemName, initialValue){

  const [state, dispatch] = React.useReducer(reducer, initialState({initialValue}));
  const {
    error,
    loading,
    sincronizedItem,
    item,
  } = state;

  //Action Creator:
  const onError = (error) => dispatch({
    type: actionTypes.error, payload: error,
  });

  const onSuccess = (item) => dispatch({
    type: actionTypes.success, payload: item,
  });

  const onSave = (item) => dispatch({
    type: actionTypes.save, payload: item,
  });

  const onSincronize = () => dispatch({
    type: actionTypes.sincronize,
  });

  // const [error, setError] = React.useState(false);
  // const [loading, setLoading] = React.useState(true);
  // const [sincronizedItem, setSincronizedItem] = React.useState(true);

    //useState: tiene 2 posiciones -> estado(value), funcion que cambia valor(setValue)
    //Estado inicial de nuestros item(TODOs) -> ¡Podemos utilizar otros react hooks oficiales de React!
  //   const [item, setItem] = React.useState(initialValue);
    //React Hook de -> React

    //React Hook -> useEffect
    React.useEffect(() => {
      setTimeout(() =>{
        try {
          //LocalStorage, getItem, setItem: Nos ayuda a guardar la informacion, aun si recargamos la pagina.
          //Guardamos nuestro item en una constante
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;

          if(!localStorageItem){
            //Si el usuario es nuevo no existe un item en localStorage, por lo tanto guardamos uno con un array vacío
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          }else{
            //Si existen item(TODOs) en el localStorage, los regresamos como nuestros todos
            parsedItem = JSON.parse(localStorageItem);
          }

          onSuccess(parsedItem);
          // setItem(parsedItem);
          // setLoading(false);
          // setSincronizedItem(true);
        } catch(error) {
          // dispatch({type: actionTypes.error, payload: error });
          onError(error);
        }
      }, 1000);
    }, [sincronizedItem]);
    //Funcion puente entre: toggleCompleteTodo y deleteTodo contra, localStogare y el estado(todos)

    //Creamos la función en la que actualizaremos nuestro localStorage.
    //Actualizamos la función para guardar nuestro item con las nuevas variables y parámetros

    //Funcion que trabaja con seveTodos
    const saveItem = (newItem) => {
      try {
        //Convertimos a string nuestros item(TODOs)
        const stringifiedItem = JSON.stringify(newItem);
        //Los guardamos en el localStorage
        localStorage.setItem(itemName, stringifiedItem);
        //Actualizamos nuestro estado
        // setItem(newItem);
        onSave(newItem);
      } catch (error) {
        // dispatch({type: actionTypes.error, payload: error });
        onError(error);
      }
    };

    const sincronizeItem = () => {
      onSincronize();
      // setLoading(true);
      // setSincronizedItem(false);
    };

    return {
      //Se devuelve el array porque asi es la estructura base de react hooks:
      //Para tener un mejor control de los datos retornados, podemos regresarlos dentro de un objeto
      item,
      saveItem,
      loading,
      error,
      sincronizeItem,
    };
}

const initialState = ({initialValue}) => ({
  sincronizedItem: true,
  error: false,
  loading: true,
  item: initialValue,
});

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sincronize: 'SINCRONIZE',
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    sincronizedItem: true,
    item: payload,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.sincronize]: {
    ...state,
    sincronizedItem: false,
    loading: true,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};


export { useLocalStorage };