import React from "react";

import TodoList from "@/components//molecules/TodoList";
import TodoForm from "@/components/molecules/TodoForm";

const Todo = () => {
  return (
    <div className="container">
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Todo;
