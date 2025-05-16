// import { configureStore } from "@reduxjs/toolkit"; 
// import todoReducer from '../features/todo/todoSlicer'

// // import todoReducer from '../features/todo/todoSlice';

// export const store = configureStore({
// reducer: {todo: todoReducer}
// }) ;


import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})