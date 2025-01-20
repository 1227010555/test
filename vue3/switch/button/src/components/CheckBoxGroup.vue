<template>
  <div class="group">
    <div class="container">
      <div>
        <checkbox
          :text="'clear all'"
          :tag="1"
          :disabled="lockFlag == 0 ? false : true"
          v-model:label="checkFlag"
          @change1="All()"
        />
      </div>
      <checkbox
        :text="'lock up'"
        :tag="0"
        :disabled="false"
        v-model:label="lockFlag"
        @change2="Lock()"
      />
    </div>
    <div class="container">
      <div v-for="(item, index) in tasks" :key="index">
        <checkbox
          :id="item.id"
          :text="item.name"
          :tag="1"
          :disabled="item.disabled"
          v-model:label="tasks[index].boxFlag"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, defineModel } from 'vue'
import checkbox from '../components/box.vue'
const tasks = defineModel('tasks')

let count = 0
let checkFlag = 0
let lockFlag = 0
watch(
  () => tasks.value,
  (newVal, oldVal) => {
    for (let i = 0; i < tasks.value.length; i++) {
      if (tasks.value[i].boxFlag === true) {
        count++
      }
    }
    if (count === 4) {
      checkFlag = 1
    } else if (count === 0) {
      checkFlag = 0
    } else if (count !== 0 && count !== 4) {
      checkFlag = 2
    }
    count = 0
  },
  { deep: true }
)
function All() {
  if (lockFlag === 0) {
    if (checkFlag === 1) {
      for (let i = 0; i < tasks.value.length; i++) {
        tasks.value[i].boxFlag = false
      }
    } else {
      for (let i = 0; i < tasks.value.length; i++) {
        tasks.value[i].boxFlag = true
      }
    }
  }
}
function Lock() {
  if (lockFlag === 0) {
    for (let i = 0; i < tasks.value.length; i++) {
      tasks.value[i].disabled = true
    }
    lockFlag = 1
  } else {
    for (let i = 0; i < tasks.value.length; i++) {
      tasks.value[i].disabled = false
    }
    lockFlag = 0
  }
}
</script>
<style scoped>
.container {
  display: flex;
  justify-content: start;
  align-items: start;
  padding: 1px;
}
</style>
