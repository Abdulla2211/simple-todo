'use client';
import { apiSlice } from '@/redux/services/apiSlice';
import { NewTodoType, TodoType } from '@/types/todos';

const baseUrl = '/todos/';

export const todosApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTodoList: builder.query<{ todos: TodoType[] }, undefined>({
      query: () => baseUrl,
    }),
    createTodo: builder.mutation<{ message: string; newTodo: TodoType }, { todo: NewTodoType }>({
      query: ({ todo }) => ({
        url: baseUrl,
        method: 'POST',
        body: { todo },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data: response } = await queryFulfilled;
        const updateTodosList = dispatch(
          todosApiSlice.util.updateQueryData('getTodoList', undefined, (draftTodosList) => {
            draftTodosList.todos.unshift(response.newTodo);
          }),
        );
        try {
          await queryFulfilled;
        } catch {
          updateTodosList.undo();
        }
      },
    }),
    updateTodo: builder.mutation<{ message: string; updatedTodo: TodoType }, { todo: NewTodoType }>(
      {
        query: ({ todo }) => ({
          url: baseUrl,
          method: 'PUT',
          body: { todo },
        }),
        async onQueryStarted(_, { dispatch, queryFulfilled }) {
          const { data: response } = await queryFulfilled;
          const updateTodosList = dispatch(
            todosApiSlice.util.updateQueryData('getTodoList', undefined, (draftTodosList) => {
              const updatedTodo = response.updatedTodo;
              const todoIdx = draftTodosList.todos.findIndex(
                (todo) => todo._id === updatedTodo._id,
              );
              draftTodosList = {
                ...draftTodosList,
                todos: [
                  ...draftTodosList.todos.slice(0, todoIdx),
                  updatedTodo,
                  ...draftTodosList.todos.slice(todoIdx + 1),
                ],
              };
              return draftTodosList;
            }),
          );
          try {
            await queryFulfilled;
          } catch {
            updateTodosList.undo();
          }
        },
      },
    ),
    deleteTodo: builder.mutation<{ message: string }, { id: string }>({
      query: ({ id }) => ({
        url: baseUrl,
        method: 'DELETE',
        body: { id },
      }),
      async onQueryStarted({ id }, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        const updateTodosList = dispatch(
          todosApiSlice.util.updateQueryData('getTodoList', undefined, (draftTodosList) => {
            draftTodosList = {
              ...draftTodosList,
              todos: draftTodosList.todos.filter((todo) => todo._id !== id),
            };
            return draftTodosList;
          }),
        );
        try {
          await queryFulfilled;
        } catch {
          updateTodosList.undo();
        }
      },
    }),
  }),
});

export const {
  useCreateTodoMutation,
  useGetTodoListQuery,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todosApiSlice;
