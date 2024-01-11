'use client';
import React from 'react';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch } from '@/redux/hooks';
import { handleSetShowTodoForm } from '@/redux/features/todos/todoFormSlice';

const Menu = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const openTodoForm = () => {
    dispatch(handleSetShowTodoForm({ isShowTodoForm: true }));
  };
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <button type="button" className={styles.button} onClick={openTodoForm}>
          <FontAwesomeIcon icon={faCirclePlus} className={styles.icon} />
        </button>
      </div>
    </nav>
  );
};

export default Menu;
