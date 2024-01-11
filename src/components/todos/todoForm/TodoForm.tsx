'use client';
import { Modal } from '@/components/common';
import { Button, Input, Radio, TextArea } from '@/components/html';
import { handleSetShowCreateTodoForm } from '@/redux/features/todos/commonTodosSlice';
import { useAppDispatch } from '@/redux/hooks';
import styles from './TodoForm.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { RadioOption } from '@/components/html/radio/Radio';

const TodoForm = () => {
  const dispatch = useAppDispatch();
  const closeTodoForm = () => {
    dispatch(handleSetShowCreateTodoForm(false));
  };

  const handleChange = (name: string, value: string): void => {
    console.log(name, value);
  };

  const radioOptions: RadioOption[] = [
    {
      id: 'status',
      label: 'Ожидает выполнения',
      value: 'Ожидает выполнения',
    },
    {
      id: 'status',
      label: 'В процессе',
      value: 'В процессе',
    },
    {
      id: 'status',
      label: 'Выполнено',
      value: 'Выполнено',
    },
  ];
  return (
    <Modal isShow={true} title="Создание задачи" onClose={closeTodoForm}>
      <form className={styles.form}>
        <Input name="name" handleChange={handleChange} value={''} label="Наименование задачи" />
        <TextArea
          name="description"
          handleChange={handleChange}
          value={''}
          label="Описание задачи"
        />
        <Radio
          gridAutoFlow="row"
          name="status"
          handleChange={handleChange}
          title="Статус"
          options={radioOptions}
        />
        <Button type="submit" rightIcon={<FontAwesomeIcon icon={faPlus} />}>
          Создать задачу
        </Button>
      </form>
    </Modal>
  );
};

export default TodoForm;
