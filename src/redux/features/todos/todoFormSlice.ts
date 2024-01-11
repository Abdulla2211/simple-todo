'use client';
import { OptionalNewTodoType, NewTodoType, TodoType } from '@/types/todos';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type FormType = 'create' | 'update';

interface InitialStateTypes {
  isShowTodoForm: boolean;
  formType: FormType;
  todoState: NewTodoType;
}

interface OptionalInitialStateTypes extends Partial<InitialStateTypes> {}

const initialTodoState: TodoType = {
  name: '',
  description: '',
  status: 'Ожидает выполнения',
  _id: '',
  __v: 0,
  createdAt: '',
  updatedAt: '',
};

const initialState: InitialStateTypes = {
  isShowTodoForm: false,
  formType: 'create',
  todoState: initialTodoState,
};

const todoFormSlice = createSlice({
  name: 'todoForm',
  initialState,
  reducers: {
    handleSetShowTodoForm: (state, action: PayloadAction<OptionalInitialStateTypes>) => {
      const newIsShowTodoForm = action.payload.isShowTodoForm;
      const newFormType = action.payload.formType;
      const newTodoState = action.payload.todoState;
      if (newIsShowTodoForm !== undefined) {
        state.isShowTodoForm = newIsShowTodoForm;
        if (!newIsShowTodoForm) state.todoState = initialTodoState;
      }
      if (newFormType !== undefined) {
        state.formType = newFormType;
      } else {
        state.formType = 'create';
      }
      if (newTodoState !== undefined) {
        state.todoState = { ...state.todoState, ...newTodoState };
      }
    },
    handleSetTodoState: (state, action: PayloadAction<OptionalNewTodoType>) => {
      state.todoState = { ...state.todoState, ...action.payload };
    },
  },
});

export const { handleSetShowTodoForm, handleSetTodoState } = todoFormSlice.actions;
export default todoFormSlice.reducer;
