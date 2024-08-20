<script setup>
    defineProps({
        todoText: String,
        todoKey: Number
    })
</script>

<template>
    <li :key="todoKey">{{ todoKey }} | {{ todoText }}</li>
</template>