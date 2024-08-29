<script setup lang="ts">
import { useTodoListStore } from '@/stores/todoList';
import { ref } from 'vue';

    const todoText = ref("")
    const todoStore = useTodoListStore()

    function addTodo(){
        todoStore.addTodo(todoText.value);
        todoText.value = ""
    }
    
</script>
<template>
    <form @submit.prevent="addTodo" data-test="todo-add-form">
        <input type="text" v-model="todoText" data-test="todo-text"/>
        <button type="submit" data-test="todo-add-btn">Add</button>
    </form>
</template>