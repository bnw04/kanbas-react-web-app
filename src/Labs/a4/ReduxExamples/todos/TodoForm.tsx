import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { LabState } from "../../../store";


function TodoForm() {
  const { todo } = useSelector((state: LabState) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    
    <li className="list-group-item d-flex justify-content-between align-items-center">
        <input
          value={todo.title}
          onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value })) }
        />
        <span>
        <button className="btn btn-warning me-2" onClick={() => dispatch(updateTodo(todo))}> Update </button>
        <button className="btn btn-success" onClick={() => dispatch(addTodo(todo))}> Add </button>    
        </span>
    </li>
  );
}
export default TodoForm;