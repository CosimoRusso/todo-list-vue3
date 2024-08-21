<script setup lang="ts">
import { ref } from 'vue';
import TodoItem from './TodoItem.vue'
import TodoAdd from './TodoAdd.vue'

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

function markAllAs(done: Boolean): null{
    todos.value = todos.value.map(t => {
        return {...t, done}
    })
}
function markAllAsDone(){
    markAllAs(true);
}
function markAllAsNotDone(){
    markAllAs(false);
}

</script>

<template>
    <p>{{ todoText }}</p>
  <TodoAdd v-model:todo-text="todoText" @add-todo="addTodo" />
  <ul>
    <TodoItem 
        v-for="todo in todos" 
        :key="todo.todoId"
        :todo-key="todo.todoId"
        :todo-text="todo.text"
        :todo-done="todo.done"
        @delete-todo="deleteTodo"
        @check-status-changed="onTodoStatusChanged"
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
