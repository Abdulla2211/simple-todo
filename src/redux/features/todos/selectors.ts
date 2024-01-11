'use client';
import { RootState } from '@/redux/store';
import { createSelector } from '@reduxjs/toolkit';

const selectTodoFormState = (state: RootState) => state.todoForm;

export const selectIsShowTodoForm = createSelector(
  [selectTodoFormState],
  (selectTodoFormState) => selectTodoFormState.isShowTodoForm,
);
export const selectTodoFormType = createSelector(
  [selectTodoFormState],
  (selectTodoFormState) => selectTodoFormState.formType,
);
export const selectTodoState = createSelector(
  [selectTodoFormState],
  (selectTodoFormState) => selectTodoFormState.todoState,
);
