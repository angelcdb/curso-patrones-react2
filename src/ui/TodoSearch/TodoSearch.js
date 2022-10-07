//importar todo React para usar useState
import React from "react";
import "../TodoSearch/TodoSearch.css";

/*Si quieres importar unicamente useState
// import { useState } from 'react';
//Lo vas a usar de esta forma:
// const [searchValue, setSearchValue] = useState('')*/

function TodoSearch({ searchValue, setSearchValue, loading }) {
  //Estado, se usa de esta forma:
  // const [searchValue, setSearchValue] = React.useState('');

  //useState: tiene 2 posiciones -> estado(value), funcion que cambia valor(setValue)

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Buscar..."
      //Valor del estado
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
}
//Export nombrados(Asi se evita problemas)
export { TodoSearch };
