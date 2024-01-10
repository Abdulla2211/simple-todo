'use client';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface initialStateTypes {
  isShowCreateTodoForm: boolean;
}

const initialState: initialStateTypes = {
  isShowCreateTodoForm: false,
};

const commonTodosSlice = createSlice({
  name: 'commonTodos',
  initialState,
  reducers: {
    handleSetShowCreateTodoForm: (state, action: PayloadAction<boolean>) => {
      state.isShowCreateTodoForm = action.payload;
    },
  },
});

export const { handleSetShowCreateTodoForm } = commonTodosSlice.actions;
export default commonTodosSlice.reducer;
