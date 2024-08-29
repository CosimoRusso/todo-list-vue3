<script setup lang="ts">
import { useTodoListStore } from '@/stores/todoList';
import { computed, type ComputedRef } from 'vue';

    const props = defineProps({
        todoKey: {
            type: Number,
            required: true
        }
    })

    const todoStore = useTodoListStore();

    function deleteTodo(todoKey: number): void {
        todoStore.deleteTodo(todoKey);
    }

    function onCheckStatusChanged(todoId: number, newStatus: boolean){
        todoStore.markTodoAs(todoId, newStatus);
    }

    const currentTodo: ComputedRef<TodoInterface> = computed<TodoInterface>((): TodoInterface => {
        const element = todoStore.todos.find(t => t.todoId===props.todoKey);
        if (!element) throw Error("current todo not found");
        return element
    })

    const getDoneClass: ComputedRef<string> = computed<string>(() => {
        return currentTodo.value.done ? 'done' : 'not-done';
    })

</script>

<template>
    <li :key="todoKey" :class="getDoneClass" data-test="todo-item">
        <input type='checkbox' @change="e => onCheckStatusChanged(todoKey, e.target.checked)" data-test="todo-item-check"/>
        {{ todoKey }} | {{ currentTodo.text }}
        <button class="btn-delete" @click="() => deleteTodo(todoKey)" data-test="todo-item-delete">X</button></li>
</template>

<style>
    .done {
        text-decoration: line-through;
    }
</style>