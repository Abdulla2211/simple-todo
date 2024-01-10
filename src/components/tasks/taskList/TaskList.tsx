import React from 'react';
import { TaskItem } from '../taskItem';
import styles from './TaskList.module.scss';

const TaskList = () => {
  return (
    <ul className={styles.list}>
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </ul>
  );
};

export default TaskList;
