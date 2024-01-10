'use client';
import { RootState } from '@/redux/store';
import { createSelector } from '@reduxjs/toolkit';

const selectCommonTodosState = (state: RootState) => state.commonTodos;

export const selectIsShowCreateTodoForm = createSelector(
  [selectCommonTodosState],
  (selectCommonTodosState) => selectCommonTodosState.isShowCreateTodoForm,
);
