'use client';
import { FullPageSpinner, Modal } from '@/components/common';
import { Button, Input, Radio, TextArea } from '@/components/html';
import styles from './TodoForm.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faPlus } from '@fortawesome/free-solid-svg-icons';
import useTodoForm from './useTodoForm';

const TodoForm = () => {
  const {
    name,
    description,
    closeTodoForm,
    handleChange,
    handleSubmit,
    radioOptions,
    formType,
    createTodoLoading,
  } = useTodoForm();
  return (
    <>
      {createTodoLoading && <FullPageSpinner />}
      <Modal
        isShow={true}
        title={formType === 'create' ? 'Создание задачи' : 'Изменение данных'}
        onClose={closeTodoForm}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.form__info}>
            <span></span>
            <span>- Обязательные поля</span>
          </div>
          <Input
            name="name"
            handleChange={handleChange}
            value={name}
            label="Наименование задачи"
            required
          />
          <TextArea
            name="description"
            handleChange={handleChange}
            value={description}
            label="Описание задачи"
          />
          <Radio
            gridAutoFlow="row"
            name="status"
            handleChange={handleChange}
            title="Статус"
            options={radioOptions}
          />
          <Button
            type="submit"
            rightIcon={
              formType === 'create' ? (
                <FontAwesomeIcon icon={faPlus} />
              ) : (
                <FontAwesomeIcon icon={faFloppyDisk} />
              )
            }
            disabled={!name}>
            {formType === 'create' ? 'Создать задачу' : 'Сохранить изменения'}
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default TodoForm;
