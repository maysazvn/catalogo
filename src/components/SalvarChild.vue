<script setup>
defineEmits('salvarpreco')
</script>

<template>
<button @click.prevent="$emit('salvarpreco')">
<slot>
</slot>
</button>
</template>

<style scoped>

</style>