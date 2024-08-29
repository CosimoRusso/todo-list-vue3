<script setup lang="ts">
import { ref } from 'vue';
import TodoItem from './TodoItem.vue'
import TodoAdd from './TodoAdd.vue'
import { useTodoListStore } from '@/stores/todoList';

const todoStore = useTodoListStore();

function markAllAsDone(){
    todoStore.markAllAs(true);
}
function markAllAsNotDone(){
    todoStore.markAllAs(false);
}

</script>

<template>
  <TodoAdd />
  <ul>
    <TodoItem 
        v-for="todo in todoStore.todos" 
        :key="todo.todoId.toString()"
        :todo-key="todo.todoId"
    />
  </ul>
  <button @click="markAllAsDone" data-test="all-todos-done">Mark all as done</button>
  <button @click="markAllAsNotDone" data-test="all-todos-not-done">Mark all as To Do</button>
</template>

<style>
    ul {
        list-style-type: none;
        li {
            margin-top: 10px;
            input[type="checkbox"] {
                margin-right: 5px;
            }
        }
    }
    

</style>
