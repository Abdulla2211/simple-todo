'use client';
import { TodoForm, TodoList } from '@/components/todos';
import { selectIsShowCreateTodoForm } from '@/redux/features/todos/selectors';
import { useShallowEqualSelector } from '@/redux/hooks';
import React from 'react';

const Home = () => {
  const isShowTodoForm = useShallowEqualSelector(selectIsShowCreateTodoForm);
  return (
    <main>
      <TodoList />
      {isShowTodoForm && <TodoForm />}
    </main>
  );
};

export default Home;
