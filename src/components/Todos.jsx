import React from "react";

function Todos({ todos, index, deleteTodo }) {
  return (
    <div className="todo">
      <p>{todos}</p>
      <div className="actions">
        <input type="checkbox" />
        <button onClick={() => deleteTodo(index)}>Delete</button>
      </div>
    </div>
  );
}

export default Todos;
