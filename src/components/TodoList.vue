<script setup lang="ts">
import { ref } from 'vue';
import TodoItem from './TodoItem.vue'

const todoId = ref(0);
const todoText = ref("");

const todos = ref([]);

function addTodo(){
    if (!todoText.value) return;
    const newTodo = {todoId: todoId.value++, text: todoText.value, done: false};
    todos.value.push(newTodo);
    todoText.value = "";
}
function deleteTodo(todoId: Number): null {
    todos.value = todos.value.filter(e => e.todoId != todoId);
}
function onTodoStatusChanged(todoId: Number, newStatus: Boolean): null {
    todos.value = todos.value.map(t => {
        if (t.todoId != todoId) return t;
        return {...t, done: newStatus}
    })
}
</script>

<template>
  <form @submit.prevent="addTodo">
        <input type="text" v-model="todoText" />
        <button type="submit">Add</button>
  </form>
  <ul>
    <TodoItem 
        v-for="todo in todos" 
        :todo-key="todo.todoId" 
        :todo-text="todo.text"
        :todo-done="todo.done"
        @delete-todo="deleteTodo"
        @check-status-changed="onTodoStatusChanged"
    />
  </ul>
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
