import { createApp } from "vue";
import { TodosProvider } from "./data-providers/TodosProvider";
import TodoApp from "./todo-app/TodoApp.vue";

(async () => {
  const todosProvider = new TodosProvider();
  await todosProvider.init();

  const props = {
    todosProvider: todosProvider
  }
  
  const app = createApp(TodoApp, props);
  app.mount("#todoApp");
})();
