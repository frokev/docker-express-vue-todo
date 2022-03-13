import { Todo } from "./index";

export class Todos {
  private _todos: Todo[];

  constructor(todos: Todo[]) {
    this._todos = todos;
  }

  public get nextId() {
    let currLastId = this._todos[this._todos.length - 1]?.id ?? 0;
    return ++currLastId;
  }

  public toArray(): Todo[] {
    return this._todos;
  }

  public getTodo(id: number): Todo {
    return this._todos.find((t) => t.id == id);
  }

  public addTodo(todo: Todo) {
    this._todos.push(todo);
  }

  public removeTodo(id: number) {
    let idx = this._todos.findIndex((t) => t.id == id);
    this._todos.splice(idx, 1);
  }

  public updateTodo(id: number, todo: Todo) {
    let currTodo = this._todos.find((t) => t.id == id);
    let newTodo = Object.assign(currTodo, todo);
    let idx = this._todos.indexOf(currTodo);
    this._todos[idx] = newTodo;
  }
}
