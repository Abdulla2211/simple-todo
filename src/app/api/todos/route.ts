import Todo from '@/models/Todo';
import { NextResponse, NextRequest } from 'next/server';

export async function GET() {
  try {
    const todos = await Todo.find();
    return NextResponse.json({ todos }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Ошибка при создании задачи', error }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const todoData = body.todo;
    const newTodo = await Todo.create(todoData);
    return NextResponse.json({ message: 'Задача успешно создана', newTodo }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Ошибка при создании задачи', error }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const todoData = body.todo;
    const updatedTodo = await Todo.findByIdAndUpdate(todoData._id, todoData, { new: true });
    return NextResponse.json({ message: 'Задача успешно изменена', updatedTodo }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Ошибка при изменении задачи', error }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    const deletedTodo = await Todo.findByIdAndDelete({ _id: id }, { select: 'name' });

    if (deletedTodo) {
      return NextResponse.json(
        { message: `Задача "${deletedTodo.name}" успешно удалена` },
        { status: 200 },
      );
    } else {
      return NextResponse.json({ message: 'Задача не найдена' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ message: 'Ошибка при удалении задачи', error }, { status: 500 });
  }
}
