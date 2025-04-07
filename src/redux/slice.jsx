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
            
        }
    }
})

export const {addTask} = taskSlice.actions;
export default taskSlice.reducer;