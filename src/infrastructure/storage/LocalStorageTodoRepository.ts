import type { TodoRepository } from "../../domain/repositories/TodoRepository";
import { Todo } from "../../domain/entities/Todo";

export class LocalStorageTodoRepository implements TodoRepository {
  private readonly key = "todos";

  async getAll(): Promise<Todo[]> {
    const raw = localStorage.getItem(this.key);
    if (!raw) return [];
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed)
        ? parsed.map((t) => new Todo(t.id, t.text))
        : [];
    } catch {
      return [];
    }
  }

  async add(todo: Todo): Promise<void> {
    const todos = await this.getAll();
    todos.push(todo);
    localStorage.setItem(this.key, JSON.stringify(todos));
  }

  async delete(id: number): Promise<void> {
    const todos = await this.getAll();
    const filtered = todos.filter((t) => t.id !== id);
    localStorage.setItem(this.key, JSON.stringify(filtered));
  }
}
