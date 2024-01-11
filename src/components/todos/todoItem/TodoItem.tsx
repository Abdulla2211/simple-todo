import styles from './TodoItem.module.scss';

export interface TodoType {
  name: string;
  status: 'Ожидает выполнения' | 'В процессе' | 'Выполнено';
  description: string;
}

interface Props {
  todo: TodoType;
}

const TodoItem = ({ todo }: Props): JSX.Element => {
  const { name, status, description } = todo;
  return (
    <li className={styles.item}>
      <div className={styles.item__meta}>{status}</div>
      <div className={styles.item__title}>{name}</div>
      <div className={styles.item__description}>{description}</div>
    </li>
  );
};

export default TodoItem;
