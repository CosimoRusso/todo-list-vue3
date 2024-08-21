<script setup lang="ts">
    const todoText = defineModel("todoText")
    const emit = defineEmits<{
        (e: 'add-todo'): void,
    }>()
    function addTodo(){
        emit('add-todo')
    }
</script>
<template>
    <form @submit.prevent="addTodo" data-test="todo-add-form">
        <input type="text" v-model="todoText" data-test="todo-text"/>
        <button type="submit" data-test="todo-add-btn">Add</button>
    </form>
</template>