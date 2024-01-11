import React from 'react';
import { TodoItem } from '../todoItem';
import styles from './TodoList.module.scss';
import { TodoType } from '../todoItem/TodoItem';

const TodoList = () => {
  const list: TodoType[] = [
    {
      name: 'Задача 1',
      status: 'Ожидает выполнения',
      description: 'Описание 1',
    },
    {
      name: 'Задача 2',
      status: 'В процессе',
      description: 'Описание 2',
    },
    {
      name: 'Задача 3',
      status: 'Выполнено',
      description: 'Описание 3',
    },
    {
      name: 'Задача 4',
      status: 'Выполнено',
      description: 'Описание 4',
    },
    {
      name: 'Задача 5',
      status: 'Ожидает выполнения',
      description: 'Описание 5',
    },
    {
      name: 'Задача 6',
      status: 'В процессе',
      description: 'Описание 6',
    },
    {
      name: 'Задача 7',
      status: 'Ожидает выполнения',
      description: 'Описание 7',
    },
    {
      name: 'Задача 8',
      status: 'Выполнено',
      description: 'Описание 8',
    },
    {
      name: 'Задача 9',
      status: 'Ожидает выполнения',
      description: 'Описание 9',
    },
    {
      name: 'Задача 10',
      status: 'В процессе',
      description: 'Описание 10',
    },
    {
      name: 'Задача 11',
      status: 'Выполнено',
      description: 'Описание 11',
    },
  ];
  return (
    <ul className={styles.list}>
      {list?.map((todo, idx) => (
        <TodoItem key={idx} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
