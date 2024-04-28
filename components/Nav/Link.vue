<template>
    <NuxtLink :to="url">
        {{ text ?? url }}
    </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{ url: string; text: string }>();
</script>
