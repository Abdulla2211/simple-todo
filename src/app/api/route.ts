import Todo from '@/models/Todo';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export async function POST(request: NextApiRequest) {
  try {
    const body = await request.body.json();
    const todoData = body.formData;
    await Todo.create(todoData);
    return NextResponse.json({ message: 'Задача успешно создана' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Ошибка при создании задачи', error }, { status: 500 });
  }
}
