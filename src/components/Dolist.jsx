import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../redux/slice";
import doListStyles from "./Dolist.css"

function Dolist() {
  const tasks = useSelector((state) => state.tasks.tasksState);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const addNewTask = () => {
    dispatch(addTask(input));
    
    setInput("");
    console.log(tasks);
  };
  let task = document.getElementById("task");

  return (
    <div className="box">
      <p>Ваши Задачи:</p>

      <div className="task">
        {tasks.map((task) => (
        <p key={task.id}>{task.text}
        <button className="delete_button" onClick={() => dispatch(deleteTask(task.id))}>Удалить </button>
        <input type="checkbox" />
        </p>
        ))}
    

      </div>

      
      


      <div className="add_task" >
        <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="чем будешь страдать?"
        />
        <button onClick={addNewTask}>Добавить задачу</button>
      </div>

      
    </div>
  );
}

export default Dolist;
