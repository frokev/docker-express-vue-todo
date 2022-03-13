import * as express from 'express';
import { Server } from './server';
import { TodosParser } from './todos/index';

const app = express();
const todosParser = new TodosParser();

(async function(){
  let todos = await todosParser.parseFromJsonFile("src/todos/data.json");

  let server = new Server(app, todos, "../WebApp/dist");
  server.configureUsings();
  server.configureRoutes();
  server.run(3000);
})();