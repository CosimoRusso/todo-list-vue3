<script setup>
    defineProps({
        text: String,
        key: int
    })
</script>

<template>
    <li :key="key">{{ text }}</li>
</template>