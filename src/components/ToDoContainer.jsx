import React from "react";
import Todos from "./Todos";

function TodoContainer({ todos, deleteTodo }) {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => {
        return (
          <Todos
            key={index}
            todos={todo}
            index={index}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
}

export default TodoContainer;
