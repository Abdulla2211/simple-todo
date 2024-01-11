'use client';

import { useGetTodoListQuery } from '@/redux/features/todos/todosApiSlice';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

function useTodoList() {
  const { data, error, isFetching } = useGetTodoListQuery(undefined, {
    selectFromResult: ({ data, error, isFetching }) => ({
      data,
      error,
      isFetching,
    }),
  });

  useEffect(() => {
    if (error) {
      toast.error('Произошла ошибка при получении списка задач.');
    }
  }, [error]);
  return { todos: data?.todos, isFetching };
}

export default useTodoList;
