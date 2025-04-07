import react from "react";
import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./slice";

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,


    }
})

export default store;
