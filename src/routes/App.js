import React from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from "./home/HomePage";
import { NewTodoPage } from "./new/NewTodoPage";
import { EditTodoPage } from "./edit/EditTodoPage";
import { NotFound } from "./NotFound/NotFound";


function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewTodoPage />} />
        <Route path="/edit/:id" element={<EditTodoPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );

}

export { App };
// rfc y enter: nos crea todo el componente a utilizar.