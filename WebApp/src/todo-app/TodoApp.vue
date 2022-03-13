<template>
  <div class="container">
    <h1>Todos</h1>
    <AddTodo :addTodo="addTodo" class="add-todo"/>
    <TodoItems
      :todos="todos"
      :key="todosKey"
      :updateTodo="debounce(updateTodo, 2000)"
      class="todo-items"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TodosProvider } from "../data-providers/TodosProvider";
import AddTodo from "./AddTodo.vue";
import TodoItems from "./TodoItems.vue";
import { Todo } from "../todos";
import { debounce } from "lodash";

export default defineComponent({
  name: "TodoApp",
  props: {
    todosProvider: TodosProvider,
  },
  components: {
    AddTodo,
    TodoItems,
  },
  data() {
    return {
      todos: this.todosProvider.toArray(),
      todosKey: 0,
      debounce: debounce,
    };
  },
  methods: {
    addTodo(description) {
      let todo: Todo = {
        id: this.todosProvider.nextId,
        title: description,
        completed: false,
      };

      if (description) this.todosProvider.addTodo(todo);
      this.todosKey++;
    },
    updateTodo(todo) {
      this.todosProvider.updateTodo(todo.id, todo);
      this.todosKey++;
    },
  },
});
</script>

<style scoped>
.container {
  width: fit-content;
  position: relative;
  top: 10%;
}

.todo-items {
  padding-left: 5px;
}

.add-todo {
  padding: 5px;
}
</style>
