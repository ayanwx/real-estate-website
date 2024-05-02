<template>
    <input type="button" :text="btntext" />
</template>

<script setup lang="ts">
defineProps<{ btntext: string }>();
</script>
