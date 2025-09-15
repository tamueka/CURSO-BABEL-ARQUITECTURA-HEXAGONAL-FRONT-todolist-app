import { useEffect, useState } from "react";
import { TodoInput } from "../components/TodoInput";
import { TodoList } from "../components/TodoList";
import { LocalStorageTodoRepository } from "../../infrastructure/storage/LocalStorageTodoRepository";
import { AddTodo } from "../../application/uses-cases/AddTodo";
import { DeleteTodo } from "../../application/uses-cases/DeleteTodo";
import { GetTodos } from "../../application/uses-cases/GetTodos";
import type { Todo } from "../../domain/entities/Todo";

const repo = new LocalStorageTodoRepository();
const addTodoUseCase = new AddTodo(repo);
const deleteTodoUseCase = new DeleteTodo(repo);
const getTodosUseCase = new GetTodos(repo);

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getTodosUseCase.execute().then(setTodos);
  }, []);

  const handleAdd = async (text: string) => {
    await addTodoUseCase.execute(text);
    const updated = await getTodosUseCase.execute();
    setTodos(updated);
  };

  const handleDelete = async (id: number) => {
    await deleteTodoUseCase.execute(id);
    const updated = await getTodosUseCase.execute();
    setTodos(updated);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">
        📝 Lista de Tareas
      </h1>
      <TodoInput onAdd={handleAdd} />
      <TodoList todos={todos} onDelete={handleDelete} />
    </div>
  );
};
