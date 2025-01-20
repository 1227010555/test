<template>
  <div class="container">
    <div
      :class="{ 'all-container': disabled === false, 'disabled-container': disabled === true }"
      @click="boxSwitch"
    >
      <div
        class="picture-container"
        :class="{ 'picture-content-show': isCheck == 1, 'picture-content-inter': isCheck == 2 }"
      ></div>
      <div class="text-container" :class="[isCheck && 'text-content-ch']">{{ props.text }}</div>
    </div>
  </div>
</template>
<script setup>
import { defineModel, ref, defineProps, defineEmits } from 'vue'
const props = defineProps(['text', 'id', 'tag', 'disabled'])
const emits = defineEmits(['change1', 'change2'])
const isCheck = defineModel('label')
function boxSwitch() {
  if (props.tag != 0) {
    if (props.id != undefined && props.disabled === false) isCheck.value = !isCheck.value
    else if (props.id === undefined && props.disabled === false) emits('change1')
  } else {
    emits('change2')
  }
}
</script>
<style scoped>
.all-container {
  display: flex;
  cursor: pointer;
}
.disabled-container {
  cursor: not-allowed;
  display: flex;
}
.text-container {
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15px;
  padding: 0 10px 0 10px;
  color: rgb(106.8, 108.9, 113.1);
  transition: color 0.25s;
}
.text-content-ch {
  color: var(--el-color-primary-light-3, #e1e9f0);
  transition: color 0.25s;
}
.picture-container {
  height: 15px;
  width: 15px;
  border: 0.1px solid rgb(252, 210.9, 210.9);
  border-radius: 1px;
  transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
  transition: background-image 0.25s ease-out;
}
.picture-content-show {
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(../assets/component/white_ch-blue_background.jpg);
  border-radius: 1px;
  border: 0.1px solid var(--el-color-primary-light-3, #e1e9f0);
  transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
  transition: background-image 0.25s ease-out;
}
.picture-content-inter {
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(../assets/component/white_ch-blue_background1.jpg);
  border-radius: 1px;
  border: 0.06px solid var(--el-color-primary-light-3, #e1e9f0);
  transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46) s;
  transition: background-image 0.25s ease-out;
}
</style>