'use client';

import { selectIsShowTodoForm } from '@/redux/features/todos/selectors';
import { useShallowEqualSelector } from '@/redux/hooks';
import { TodoForm, TodoList } from '..';
import styles from './TodosPage.module.scss';

function TodosPage() {
  const isShowTodoForm = useShallowEqualSelector(selectIsShowTodoForm);
  return (
    <div className={styles.page}>
      <TodoList />
      {isShowTodoForm && <TodoForm />}
    </div>
  );
}

export default TodosPage;
