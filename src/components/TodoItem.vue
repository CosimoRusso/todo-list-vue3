<script setup lang="ts">
    defineProps({
        todoText: String,
        todoKey: Number
    })

    const emit = defineEmits(['delete-todo'])

    function deleteTodo(todoKey: Number): null {
        emit('delete-todo', todoKey)
    }
</script>

<template>
    <li :key="todoKey">{{ todoKey }} | {{ todoText }}<button @click="() => deleteTodo(todoKey)">X</button></li>
</template>