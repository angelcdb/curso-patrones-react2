import React from "react";
import { useNavigate } from "react-router-dom";
import "../TodoForm/TodoForm.css";

function TodoForm(props) {
  const navigate = useNavigate();
  const [newTodoValue, setNewTodoValue] = React.useState(props.defaultTodoText || '');

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    navigate('/');
  };
  const onSubmit = (event) => {
    event.preventDefault();
    props.submitEvent(newTodoValue);
    navigate('/');
  };

  return (
    <form onSubmit={onSubmit}>
      <label>{props.label}</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Escribe un TODO"
      />
      <div className="TodoForm-buttonContainer">
        <button
          onClick={onCancel}
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancelar
        </button>

        <button type="submit"
          className="TodoForm-button TodoForm-button--add">
          {props.submitText}
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
