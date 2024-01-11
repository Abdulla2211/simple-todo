import { TodoType } from '@/types/todos';
import styles from './TodoItem.module.scss';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import useTodoItem from './useTodoItem';
import { FullPageSpinner } from '@/components/common';

interface Props {
  todo: TodoType;
}

const TodoItem = ({ todo }: Props): JSX.Element => {
  const { name, status, description, createdAt, updatedAt } = todo;
  const { changeTodo, handleDeleteTodo, deleteTodoLoading } = useTodoItem({ todo });
  const statusStyles = cn(styles.item__meta__status, {
    [styles.pending]: status === 'Ожидает выполнения',
    [styles.process]: status === 'В процессе',
    [styles.complete]: status === 'Выполнено',
  });
  const formatTimestamp = (timestamp: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    };

    const date = new Date(timestamp);
    const formatted = date.toLocaleString('ru-RU', options);
    return formatted;
  };
  return (
    <>
      {deleteTodoLoading && <FullPageSpinner />}
      <li className={styles.item}>
        <div className={styles.item__dates}>
          <div className={styles.item__dates__container}>
            <span>Создана:</span>
            <span>{formatTimestamp(createdAt)}</span>
          </div>
          {createdAt !== updatedAt && (
            <div className={styles.item__dates__container}>
              <span>Обновлена:</span>
              <span>{formatTimestamp(updatedAt)}</span>
            </div>
          )}
        </div>
        <h1 className={styles.item__title}>{name}</h1>
        <p className={styles.item__description}>{description}</p>
        <div className={styles.item__meta}>
          <span className={statusStyles}>{status}</span>
          <div className={styles.item__meta__container}>
            <button className={styles.item__meta__container__icon} onClick={changeTodo}>
              <FontAwesomeIcon icon={faPenToSquare} style={{ color: 'blue' }} />
            </button>{' '}
            <button className={styles.item__meta__container__icon} onClick={handleDeleteTodo}>
              <FontAwesomeIcon icon={faTrash} style={{ color: 'red' }} />
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default TodoItem;
