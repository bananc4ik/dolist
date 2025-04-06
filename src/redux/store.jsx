import react from "react";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slice";

export const store = configureStore({
     reducer:{
        reducer:{
            tasks:tasksReducer
            
        }
    }
})

export default store;

export const tasksReducer = reducer.tasksReducer;
