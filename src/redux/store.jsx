import react from "react";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
     reducer:{
        reducer:{
            tasks:tasksReducer,
            
        }
    }
})

export default store;



