import { Express } from 'express';
import { Todo, Todos } from './todos/index';
import * as express from 'express';

export class Server {
  private _express: Express;
  private _todos: Todos;
  private _staticAssetsPath: string;

  constructor(express: Express, todos: Todos, staticAssetsPath?: string) {
    this._express = express;
    this._todos = todos;
    this._staticAssetsPath = staticAssetsPath;
  }

  public configureUsings() {
    this._express.use(express.json());
    
    if (this._staticAssetsPath)
      this._express.use(express.static(this._staticAssetsPath))
  }

  public configureRoutes() {
    this._express.get('/', (req, res) => {
      return res.status(200).json(this._todos.toArray());
    });

    this._express.get('/_api/todos', (req, res) => {
      return res.status(200).json(this._todos.toArray());
    });

    this._express.get('/_api/todos/:todoId', (req, res) => {
      let todoId: number = Number.parseInt(req.params.todoId);
      let todo: Todo = this._todos.getTodo(todoId);

      return res.status(200).json(todo);
    });
    
    this._express.post('/_api/todos', (req, res) => {
      let newTodo: Todo = req.body;
      newTodo.id = this._todos.nextId;
      this._todos.addTodo(newTodo);

      return res.status(200).send(`Successfully added todo with id: ${newTodo.id}`);
    });
    
    this._express.put('/_api/todos/:todoId', (req, res) => {
      let newTodo: Todo = req.body;
      let todoId: number = Number.parseInt(req.params.todoId);
      this._todos.updateTodo(todoId, newTodo);

      return res.status(200).send(`Successfully updated todo with id: ${todoId}`);
    });
    
    this._express.delete('/_api/todos/:todoId', (req, res) => {
      let todoId: number = Number.parseInt(req.params.todoId);
      this._todos.removeTodo(todoId);

      return res.status(200).send(`Removed todo with id: ${todoId}`);
    });
  }

  public run(port: number) {
    this._express.listen(port);
  }
}