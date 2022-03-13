<template>
  <div>
    <ul class="list-group">
      <div class="input-group todo-item" v-for="todo in todos" :key="todo.id">
          <label
            contenteditable="true"
            class="form-control"
            :class="{ 'strike-trough': todo.completed }"
            v-text="todo.title"
            @input="updateTodo((todo.title = $event.target.textContent, todo))"
          ></label>
          <div class="input-group-append">
            <div class="input-group-text">
              <input type="checkbox" v-model="todo.completed" @change="updateTodo(todo)" />
            </div>
          </div>
      </div>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TodoItems",
  props: {
    todos: Array,
    updateTodo: { type: Function }
  },
});
</script>

<style>
.strike-trough {
  text-decoration: line-through;
}

.todo-item {
  padding: 5px;
}
</style>
