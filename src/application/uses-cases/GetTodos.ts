import type { TodoRepository } from "../../domain/repositories/TodoRepository";
import type { Todo } from "../../domain/entities/Todo";

export class GetTodos {
  private repo: TodoRepository;

  constructor(repo: TodoRepository) {
    this.repo = repo;
  }

  async execute(): Promise<Todo[]> {
    return await this.repo.getAll();
  }
}
