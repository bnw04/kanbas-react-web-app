import React, { useState } from "react";

function WorkingWithArrays() {
  const API = "http://localhost:4000/a5/todos";
  const [todo, setTodo] = useState({id: 1});

  return (
    <div>
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a href={API} className="btn btn-primary">
        Get Todos
      </a>
      <h4>Retrieving an Item from an Array by ID</h4>
      <div className="d-flex align-self-center">
        <input value={todo.id} className="me-4" type="number"
          onChange={(e) => setTodo({ ...todo,
            id: e.target.valueAsNumber })}/>
        <a href={`${API}/${todo.id}`} className="btn btn-primary">
          Get Todo by ID
        </a>
      </div>
      <h3>Filtering Array Items</h3>
      <a href={`${API}?completed=true`} className="btn btn-primary">
        Get Completed Todos
      </a>
      <h3>Creating new Items in an Array</h3>
      <a href={`${API}/create`} className="btn btn-primary w-50">
        Create Todo
      </a>
      <h3>Deleting from an Array</h3>
      
      <a href={`${API}/${todo.id}/delete`} className="btn btn-primary w-50">
        Delete Todo with ID = {todo.id}
      </a>

    </div>
  );
}
export default WorkingWithArrays;