import React from "react";
import "../NotFound/NotFound.css";

function NotFound(){
  return (
    <div className="caja">
      <div className="error">
        <p className="error-404">Error 404!</p>
        <p className="pag">Pagina no encontrada..</p>

        <a className="a" href="/">
          <button className="button">Regresar a la pagina principal</button>
        </a>
      </div>
    </div>
  );
};

export { NotFound };