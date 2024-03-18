import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

function TodoItem({ todo }: {
  todo: { id: string; title: string };}) 
  {
    const dispatch = useDispatch();
    return (
    <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
      {todo.title}
      <span>
      <button className="btn btn-primary me-2" onClick={() => dispatch(setTodo(todo))}> Edit </button>
      <button className="btn btn-danger" onClick={() => dispatch(deleteTodo(todo.id))}> Delete </button>
      
      </span>
    </li>
  );
}
export default TodoItem;