import { PathLike } from "fs";
import { readFile } from "fs/promises";
import { Todo, Todos } from "../todos/index";

export class TodosParser {
  public async parseFromJsonFile(path: PathLike) {
    let todos: Todo[] = JSON.parse(
      await readFile(path, "utf8")
    );

    return new Todos(todos);
  }
}