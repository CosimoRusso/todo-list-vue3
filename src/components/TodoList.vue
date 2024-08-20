<script setup lang="ts">
import { ref } from 'vue';
import TodoItem from './TodoItem.vue'

const todoId = ref(0);
const todoText = ref("");

const todos = ref([]);

function addTodo(){
    if (!todoText.value) return;
    const newTodo = {todoId: todoId.value++, text: todoText.value};
    todos.value.push(newTodo);
    todoText.value = "";
}
</script>

<template>
  <form @submit.prevent="addTodo">
        <input type="text" v-model="todoText" />
        <button type="submit">Add</button>
  </form>
  <ul>
    <TodoItem v-for="todo in todos" :todo-key="todo.todoId" :todo-text="todo.text" />
  </ul>
</template>
