'use client';

import { handleSetShowTodoForm } from '@/redux/features/todos/todoFormSlice';
import { useDeleteTodoMutation } from '@/redux/features/todos/todosApiSlice';
import { useAppDispatch } from '@/redux/hooks';
import { TodoType } from '@/types/todos';
import { toast } from 'react-toastify';

interface Props {
  todo: TodoType;
}

function useTodoItem({ todo }: Props) {
  const dispatch = useAppDispatch();
  const [deleteTodo, { isLoading: deleteTodoLoading }] = useDeleteTodoMutation();
  const changeTodo = () => {
    dispatch(handleSetShowTodoForm({ isShowTodoForm: true, formType: 'update', todoState: todo }));
  };
  const handleDeleteTodo = () => {
    deleteTodo({ id: todo._id })
      .unwrap()
      .then((payload) => {
        toast.success(payload.message);
      })
      .catch((error) => {
        toast.error(error.data.message);
      });
  };

  return { changeTodo, handleDeleteTodo, deleteTodoLoading };
}

export default useTodoItem;
