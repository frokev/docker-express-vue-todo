import { Todo } from "./index";

export class Todos {
  public todos: Todo[];

  constructor(todos: Todo[]) {
    this.todos = todos;
  }

  public get nextId() {
    let currLastId = this.todos[this.todos.length - 1]?.id ?? 0;
    return ++currLastId;
  }

  public getTodo(id: number): Todo {
    return this.todos.find((t) => t.id == id);
  }

  public addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  public removeTodo(id: number) {
    let idx = this.todos.findIndex((t) => t.id == id);
    this.todos.splice(idx, 1);
  }

  public updateTodo(id: number, todo: Todo) {
    let currTodo = this.todos.find((t) => t.id == id);
    let newTodo = Object.assign(currTodo, todo);
    this.todos[id] = newTodo;
  }
}
