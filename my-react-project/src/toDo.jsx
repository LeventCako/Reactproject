import React, { useState } from "react";

function ToDo() {
  const [Todos, setTodos] = useState([]);
  const [task, setTask] = useState(""); // Declare task state variable

  const OnInputChange = (event) => {
    setTask(event.target.value);
  };

  const AddTask = () => {
    if (task.trim() !== "") {
      setTodos([...Todos, task]);
      setTask("");
    }
  };

  function onEnterPress(event) {
   if(event.key === 'Enter') {
    AddTask();
   }
  
  }
  return (
    <div>
      <div>
        <input
          placeholder="Add ToDo..."
          value={task} // Use task state variable
          onChange={OnInputChange}
          onKeyDown={(event) => onEnterPress(event)}
        />
        <button className="TodoBtn" onClick={AddTask}>
          Add
        </button>

        <ul>
          {Todos.map((todo, index) => (
            <li key={index}>current Todo: {todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDo;