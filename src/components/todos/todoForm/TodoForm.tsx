'use client';
import { Modal } from '@/components/common';
import { handleSetShowCreateTodoForm } from '@/redux/features/todos/commonTodosSlice';
import { useAppDispatch } from '@/redux/hooks';
import React from 'react';

const TodoForm = () => {
  const dispatch = useAppDispatch();
  const closeTodoForm = () => {
    dispatch(handleSetShowCreateTodoForm(false));
  };
  return (
    <Modal isShow={true} title="Создание задачи" onClose={closeTodoForm}>
      TodoForm
    </Modal>
  );
};

export default TodoForm;
