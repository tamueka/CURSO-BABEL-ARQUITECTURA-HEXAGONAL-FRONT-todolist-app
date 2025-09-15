export class Todo {
  public readonly id: number;
  public text: string;

  constructor(id: number, text: string) {
    this.id = id;
    this.text = text;
  }

  static create(text: string): Todo {
    return new Todo(Date.now(), text);
  }
}
