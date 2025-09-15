import type { TodoRepository } from "../../domain/repositories/TodoRepository";

export class DeleteTodo {
  private repo: TodoRepository;

  constructor(repo: TodoRepository) {
    this.repo = repo;
  }

  async execute(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
