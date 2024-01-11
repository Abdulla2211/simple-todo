import { combineReducers } from '@reduxjs/toolkit';
import { apiSlice } from './services/apiSlice';
import todoFormReducer from './features/todos/todoFormSlice';

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  todoForm: todoFormReducer,
});

export default rootReducer;
