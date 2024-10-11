import { useState } from "react";

import TodoList from "./TodoList";
import Form from "./Form";
import Footer from "./Footer";

function Todo() {
  const [todos, settodos] = useState([]);
  const CompletedTodo = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length
  
  return (
    <div>
      <Form todos={todos} settodos={settodos} />
      <TodoList todos={todos} settodos={settodos} />
      <Footer completedTodos={CompletedTodo} totalTodos ={totalTodos} />
    </div>
  );
}
  
export default Todo;
