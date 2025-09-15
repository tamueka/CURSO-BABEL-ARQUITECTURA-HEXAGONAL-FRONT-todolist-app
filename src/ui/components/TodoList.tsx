import type { Todo } from "../../domain/entities/Todo";

interface Props {
  todos: Todo[];
  onDelete: (id: number) => void;
}

export const TodoList = ({ todos, onDelete }: Props) => (
  <ul className="space-y-3 w-full max-w-md">
    {todos.map((todo) => (
      <li
        key={todo.id}
        className="flex justify-between items-center bg-white p-4 rounded-md shadow hover:shadow-md transition-shadow"
      >
        <span className="text-gray-800">{todo.text}</span>
        <button
          onClick={() => onDelete(todo.id)}
          className="text-red-500 hover:text-red-700 font-medium"
        >
          Eliminar
        </button>
      </li>
    ))}
  </ul>
);
