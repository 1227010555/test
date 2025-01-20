<template>
  <div class="RadioOptionContainer">
    <div v-for="(option, index) in options" :key="index">
      <RadioOption
        :label="option.label"
        :active="option.active"
        @click="
          () => {
            flag = option.value
            for (let i = 0; i < options.length; i++) {
              if (options[i].value === flag) {
                options[i].active = true
                console.log(options.length)
              } else if (options[i].value != flag) {
                options[i].active = false
              }
            }
          }
        "
      ></RadioOption>
    </div>
  </div>
</template>
<script setup>
import { ref, defineModel, watch } from 'vue'
import RadioOption from './RadioOption.vue'
const flag = ref(0)
const options = defineModel('options')
</script>
<style scoped>
.RadioOptionContainer {
  display: flex;
  justify-content: start;
  align-items: start;
  padding: 1px;
  cursor: pointer;
}
</style>