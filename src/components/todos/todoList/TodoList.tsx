import React from 'react';
import { TodoItem } from '../todoItem';
import styles from './TodoList.module.scss';

const TodoList = () => {
  return (
    <ul className={styles.list}>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </ul>
  );
};

export default TodoList;
