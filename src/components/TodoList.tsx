import type { Todo } from "../types";

interface Props {
  todos: Todo[];
  onDelete: (id: number) => void;
}

export const TodoList = ({ todos, onDelete }: Props) => (
  <ul>
    {todos.map((todo) => (
      <li key={todo.id}>
        {todo.text}
        <button onClick={() => onDelete(todo.id)}>Eliminar</button>
      </li>
    ))}
  </ul>
);
