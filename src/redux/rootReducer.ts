import { combineReducers } from '@reduxjs/toolkit';
import { apiSlice } from './services/apiSlice';
import commonTodosReducer from './features/todos/commonTodosSlice';

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  commonTodos: commonTodosReducer,
});

export default rootReducer;
