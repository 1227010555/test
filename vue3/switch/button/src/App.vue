<template>
  <div>
    <SwitchButton v-model:check="isCheck" />
    <el-switch v-model="value1" />
    <!-- <hello name="isCheck" @change="turnOn()" /> -->
    <hello v-model:name="isCheck" />
    <checkBoxGroup v-model:tasks="tasks" />
    <RadioGroup v-model:options="options" />
    <CardMarquee />
  </div>
</template>
<script  setup >
import SwitchButton from './components/MySwitch.vue'
import hello from './components/HelloWorld.vue'
import checkBoxGroup from './components/CheckBoxGroup.vue'
import RadioGroup from './components/RadioGroup.vue'
import CardMarquee from './components/CardMarquee.vue'
import { ref, watch } from 'vue'
const isCheck = ref(true)
const value1 = ref(true)
function turnOn() {
  isCheck.value = !isCheck.value
  console.log(isCheck.value)
}
const tasks = ref([
  { id: 1, name: 'Shanghai', boxFlag: false, disabled: false },
  { id: 2, name: 'Beijing', boxFlag: false, disabled: false },
  { id: 3, name: 'Guangzhou', boxFlag: false, disabled: false },
  { id: 4, name: 'Shenzhen', boxFlag: false, disabled: false }
])
const options = ref([
  { label: 'Option 1', value: 0, active: true },
  { label: 'Option 2', value: 1, active: false },
  { label: 'Option 3', value: 2, active: false }
])
</script>
<style scoped>
</style>