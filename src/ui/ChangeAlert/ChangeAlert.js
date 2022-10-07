import React from "react";
import { useStorageListener } from "./useStorageListener";
import "../ChangeAlert/ChangeAlert.css";

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);

  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>Parece que hiciste cambios en otra pestaña del navegador</p>;
          <p>¿Quires sincronizar tus TODOs?</p>
          <button
            className="TodoForm-button TodoForm-button-add"
            onClick={toggleShow}
          >
            Yes!
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };
