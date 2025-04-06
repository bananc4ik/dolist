import { createSlice } from "@reduxjs/toolkit";
import react from "react";

const initialState ={
    tasks:[],
}


export const taskSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{
        addTask:(state,action) =>{
            state.tasks.push({
                id:state.tasks.length,
                text:action.payload,
                iscompled:false,
            })
            
        }
    }
})

export const {addTask} = taskSlice.actions;
export default taskSlice.reducer;