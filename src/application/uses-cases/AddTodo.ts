import type { TodoRepository } from "../../domain/repositories/TodoRepository";
import { Todo } from "../../domain/entities/Todo";

export class AddTodo {
  private repo: TodoRepository;

  constructor(repo: TodoRepository) {
    this.repo = repo;
  }

  async execute(text: string): Promise<void> {
    const todo = Todo.create(text);
    await this.repo.add(todo);
  }
}
