<script setup lang="ts">
    defineProps({
        todoText: {
            type: String,
            required: true
        },
        todoKey: {
            type: Number,
            required: true
        },
        todoDone: {
            type: Boolean,
            required: true
        }
    })

    const emit = defineEmits(['delete-todo', 'check-status-changed'])

    function deleteTodo(todoKey: Number): null {
        emit('delete-todo', todoKey)
    }

    function onCheckStatusChanged(todoId: Number, newStatus: Boolean){
        emit('check-status-changed', todoId, newStatus);
    }
</script>

<template>
    <li :key="todoKey" :class="todoDone ? 'done' : 'not-done'" data-test="todo-item">
        <input type='checkbox' @change="e => onCheckStatusChanged(todoKey, e.target.checked)" data-test="todo-item-check"/>
        {{ todoKey }} | {{ todoText }}
        <button class="btn-delete" @click="() => deleteTodo(todoKey)" data-test="todo-item-delete">X</button></li>
</template>

<style>
    .done {
        text-decoration: line-through;
    }
</style>