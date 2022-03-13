<template>
  <div class="input-group">
    <input class="form-control" type="text" v-model="description">
    <div class="input-group-append">
      <button @click="this.addTodo(description), description = ''" class="btn">Add</button>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "AddTodo",
    props: {
      addTodo: { type: Function }
    },
    data: function() {
      return {
        description: ""
      }
    }
  }); 
</script>

<style scoped>
  .input-group {
    width: fit-content;
    min-width: 400px;
  }
</style>