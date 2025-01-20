<script setup>
import { ref, defineEmits, defineProps, defineModel } from 'vue'
// const props = defineProps(['name'])
// const emits = defineEmits(['update:name'])
// function handleClick() {
//   emits('update:name', !props.name)
// }
const model = defineModel('name')
function handleClick() {
  model.value = !model.value
}
</script>
<template>
  <div @click="handleClick" class="hello"></div>
</template>
<style scoped>
.hello {
  color: var(#255);
}
</style>