import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/slice";


function Dolist() {
    const tasks = useSelector((state) => state.tasks.tasks);
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    const addNewTask = () =>{
        dispatch(addTask(input));
        setInput("");
        
    }
    return(
        <div>
            <div>

            </div>
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="чем будешь страдать?" />
            <button onClick={addNewTask}>Добавить задачу</button>
            

        </div>
    );
    
}

export default Dolist;