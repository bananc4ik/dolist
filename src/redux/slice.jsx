import { createSlice } from "@reduxjs/toolkit";
import react from "react";

const initialState ={
    tasksState:[],
}


export const taskSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{
        addTask:(state,action) =>{
            state.tasksState.push({
                id:state.tasksState.length,
                text:action.payload,
                iscompled:false,
            })
            
        },

        deleteTask:(state,action) => {
            // state.tasksState = state.tasksState.filter(task => task.id !== action.payload);
            state.tasksState.splice(action.payload,1);
                                            

        }
    }
})

export const {addTask, deleteTask} = taskSlice.actions;

export default taskSlice.reducer;