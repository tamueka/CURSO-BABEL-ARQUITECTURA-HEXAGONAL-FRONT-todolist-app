import { useState, useEffect } from "react";
import type { Todo } from "./types";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

// 🔧 Función para validar y parsear datos desde localStorage
const loadTodosFromStorage = (): Todo[] => {
  try {
    const stored = localStorage.getItem("todos");
    if (!stored) return [];

    const parsed: unknown = JSON.parse(stored);
    if (!Array.isArray(parsed)) return [];

    return parsed.filter(
      (item): item is Todo =>
        typeof item === "object" &&
        item !== null &&
        typeof item.id === "number" &&
        typeof item.text === "string"
    );
  } catch (error) {
    console.error("Error leyendo localStorage:", error);
    return [];
  }
};

// 💾 Función para guardar en localStorage
const saveTodosToStorage = (todos: Todo[]) => {
  try {
    localStorage.setItem("todos", JSON.stringify(todos));
  } catch (error) {
    console.error("Error guardando en localStorage:", error);
  }
};

function App() {
  const [todos, setTodos] = useState<Todo[]>(loadTodosFromStorage);

  // 🧠 Guardar tareas cada vez que cambian
  useEffect(() => {
    saveTodosToStorage(todos);
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), text };
    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">
        📝 Lista de Tareas
      </h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
