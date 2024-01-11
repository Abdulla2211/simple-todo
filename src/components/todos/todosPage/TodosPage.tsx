'use client';

import { selectIsShowCreateTodoForm } from '@/redux/features/todos/selectors';
import { useShallowEqualSelector } from '@/redux/hooks';
import { TodoForm, TodoList } from '..';
import styles from './TodosPage.module.scss';

function TodosPage() {
  const isShowTodoForm = useShallowEqualSelector(selectIsShowCreateTodoForm);
  return (
    <div className={styles.page}>
      <TodoList />
      {isShowTodoForm && <TodoForm />}
    </div>
  );
}

export default TodosPage;
