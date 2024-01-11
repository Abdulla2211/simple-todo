'use client';
import React from 'react';
import { TodoItem } from '../todoItem';
import styles from './TodoList.module.scss';
import useTodoList from './useTodoList';
import { FullPageSpinner } from '@/components/common';

const TodoList = () => {
  const { todos, isFetching } = useTodoList();
  console.log('todos', todos);

  return (
    <>
      {isFetching && <FullPageSpinner />}
      {todos?.length === 0 ? (
        <div className={styles.empty}>
          <h1 className={styles.empty__title}>Список задач пуст, добавьте задачу.</h1>
        </div>
      ) : (
        <ul className={styles.list}>
          {todos?.map((todo, idx) => (
            <TodoItem key={idx} todo={todo} />
          ))}
        </ul>
      )}
    </>
  );
};

export default TodoList;
