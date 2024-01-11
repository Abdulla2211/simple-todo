export interface NewTodoType {
  name: string;
  status: 'Ожидает выполнения' | 'В процессе' | 'Выполнено';
  description: string;
}

export interface TodoType extends NewTodoType {
  _id: string;
  __v: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTodoRequest {
  todo: NewTodoType;
}

export interface OptionalNewTodoType extends Partial<NewTodoType> {}
