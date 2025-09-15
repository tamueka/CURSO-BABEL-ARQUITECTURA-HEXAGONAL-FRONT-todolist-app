import type { Todo } from "../entities/Todo";

export interface TodoRepository {
  getAll(): Promise<Todo[]>;
  add(todo: Todo): Promise<void>;
  delete(id: number): Promise<void>;
}
