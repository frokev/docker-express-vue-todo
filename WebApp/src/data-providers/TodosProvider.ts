import { Todo } from "../todos";

export class TodosProvider {
  public todos: Todo[];

  constructor() {
    
  }

  public get nextId() {
    let currLastId = this.todos[this.todos.length - 1]?.id ?? 0;
    return ++currLastId;
  }

  public async init() {
    let response = await fetch("_api/todos");
    this.todos = await response.json();
  }

  public toArray(): Todo[] {
    return this.todos;
  }

  public getTodo(id: number): Todo {
    return this.todos.find((t) => t.id == id);
  }

  public addTodo(todo: Todo) {
    this.todos.push(todo);

    fetch("_api/todos", {
      method: "POST", 
      body: JSON.stringify(todo),
      headers: { "content-type": "application/json"}
    });
  }

  public removeTodo(id: number) {
    let idx = this.todos.findIndex((t) => t.id == id);
    this.todos.splice(idx, 1);

    fetch("_api/todos/" + id, {method: "DELETE"})
  }

  public updateTodo(id: number, todo: Todo) {
    let currTodo = this.todos.find((t) => t.id == id);
    let newTodo = Object.assign(currTodo, todo);
    let idx = this.todos.indexOf(currTodo);
    this.todos[idx] = newTodo;

    fetch("_api/todos/" + id, {
      method: "PUT", 
      body: JSON.stringify(todo),
      headers: { "content-type": "application/json"}
    });
  }
}