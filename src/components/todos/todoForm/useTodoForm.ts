'use client';

import { RadioOption } from '@/components/html/radio/Radio';
import { selectTodoFormType, selectTodoState } from '@/redux/features/todos/selectors';
import { handleSetShowTodoForm, handleSetTodoState } from '@/redux/features/todos/todoFormSlice';
import { useCreateTodoMutation, useUpdateTodoMutation } from '@/redux/features/todos/todosApiSlice';
import { useAppDispatch, useShallowEqualSelector } from '@/redux/hooks';
import { FormEvent } from 'react';
import { toast } from 'react-toastify';

function useTodoForm() {
  const dispatch = useAppDispatch();
  const todoState = useShallowEqualSelector(selectTodoState);
  const formType = useShallowEqualSelector(selectTodoFormType);
  const { name, description, status } = todoState || {};

  const [createTodo, { isLoading: createTodoLoading }] = useCreateTodoMutation();
  const [updateTodo, { isLoading: updateTodoLoading }] = useUpdateTodoMutation();

  const closeTodoForm = () => {
    dispatch(handleSetShowTodoForm({ isShowTodoForm: false }));
  };

  const handleChange = (name: string, value: string): void => {
    dispatch(handleSetTodoState({ [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formType === 'create') {
      createTodo({ todo: { name, description, status } })
        .unwrap()
        .then((payload) => {
          closeTodoForm();
          toast.success(payload.message);
        })
        .catch((error) => {
          toast.error(error.data.message);
        });
    } else {
      updateTodo({ todo: todoState })
        .unwrap()
        .then((payload) => {
          closeTodoForm();
          toast.success(payload.message);
        })
        .catch((error) => {
          toast.error(error.data.message);
        });
    }
  };

  const radioOptions: RadioOption[] = [
    {
      id: 'Ожидает выполнения',
      label: 'Ожидает выполнения',
      value: 'Ожидает выполнения',
      checked: status === 'Ожидает выполнения',
    },
    {
      id: 'В процессе',
      label: 'В процессе',
      value: 'В процессе',
      checked: status === 'В процессе',
    },
    {
      id: 'Выполнено',
      label: 'Выполнено',
      value: 'Выполнено',
      checked: status === 'Выполнено',
    },
  ];
  return {
    name,
    description,
    closeTodoForm,
    handleChange,
    radioOptions,
    handleSubmit,
    formType,
    createTodoLoading,
    updateTodoLoading,
  };
}

export default useTodoForm;
