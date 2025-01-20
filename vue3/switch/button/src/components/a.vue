<template>
  <div><button @click="$emit('operator')">111</button></div>
</template>
<script setup>
const props = defineProps(['b', 'counter'])
const emit = defineEmits(['operator'])
console.log(props.counter)
</script>
