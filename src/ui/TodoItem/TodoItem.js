import React from "react";
import "../TodoItem/TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check  ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        ☑
      </span>

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>

      <span className="Icon Icon-delete" onClick={props.onDelete}>
        🗑
      </span>
      <span className="Icon Icon-edit" onClick={props.onEdit}>
        🖋
        {/* 📝 */}
      </span>
    </li>
  );
}
//Export nombrados(Asi se evita problemas)
export { TodoItem };
