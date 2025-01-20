<template>
  <div class="RadioOption">
    <div class="Radio" :class="{ RadioActive: props.active == true }">
      <div :class="{ RadioInner: props.active == true }"></div>
    </div>
    <div class="Label" :class="{ LabelActive: props.active == true }">{{ props.label }}</div>
  </div>
</template>
<script setup>
import { watch, defineProps } from 'vue'
const props = defineProps(['active', 'label'])
</script>
<style scoped>
.RadioOption {
  display: flex;
  align-items: center;
  justify-content: center;
}
.Radio {
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: 1px solid rgb(252, 210.9, 210.9);
  padding: 2px;
  background-color: white;
  transition: color 0.5s;
  transition: background-color 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
}
.RadioActive {
  background-color: var(--el-color-primary-light-3, #e1e9f0);
  border: 1px solid var(--el-color-primary-light-3, #e1e9f0);
  transition: color 0.5s;
  transition: background-color 0.5s;
}
.RadioInner {
  border-radius: 50%;
  background-color: white;
  height: 7px;
  width: 7px;
  transition: background-color 0.5;
}
.Label {
  font-size: 15px;
  color: rgb(106.8, 108.9, 113.1);
  padding: 10px;
  transition: color 0.5s;
}
.LabelActive {
  color: var(--el-color-primary-light-3, #e1e9f0);
  transition: color 0.5s;
}
</style>