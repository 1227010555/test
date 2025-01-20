<template>
  <div class="Switch">
    <div class="small" @click="handleClick">
      <div :class="{ 'small-on-content': name, 'small-off-content': !name }">
        <div :class="{ 'small-on-ball': name, 'small-off-ball': !name }"></div>
      </div>
    </div>
    <div class="large" @click="handleClick">
      <div :class="{ 'large-on-content': name, 'large-off-content': !name }">
        <div :class="{ 'large-on-ball': name, 'large-off-ball': !name }"></div>
      </div>
    </div>
  </div>
</template>
<script  setup >
import abcde from './a.vue'
import { ref } from 'vue'
const handleClick = () => {
  name.value = !name.value
}
const name = defineModel('check')
function op() {
  emit('inClick')
}
</script>  
<style scoped>
.large-on-content {
  display: inline-block;
  margin-left: 4px;
  width: 64px;
  height: 36px;
  border-radius: 24px;
  position: relative;
  background-color: var(--el-color-primary-light-3, #e1e9f0);
  transition: background-color 1s;
}
.large-on-ball {
  font-size: 12px;
  background-color: white;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  position: absolute;
  margin-left: 2px;
  top: 4px;
  transition: margin-left 1s;
}
.large-off-content {
  display: inline-block;
  margin-left: 4px;
  width: 64px;
  height: 36px;
  border-radius: 24px;
  position: relative;
  background-color: gray;
  transition: background-color 1s;
}
.large-off-ball {
  font-size: 12px;
  background-color: white;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  position: absolute;
  margin-left: 34px;
  top: 4px;
  transition: margin-left 1s;
}

.small-on-content {
  display: inline-block;
  margin-left: 2px;
  width: 32px;
  height: 18px;
  border-radius: 12px;
  position: relative;
  background-color: var(--el-color-primary-light-3, #e1e9f0);
  transition: background-color 1s;
}
.small-on-ball {
  font-size: 6px;
  background-color: white;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  position: absolute;
  margin-left: 1px;
  top: 2px;
  transition: margin-left 1s;
}
.small-off-content {
  display: inline-block;
  margin-left: 2px;
  width: 32px;
  height: 18px;
  border-radius: 12px;
  position: relative;
  background-color: gray;
  transition: background-color 1s;
}
.small-off-ball {
  font-size: 6px;
  background-color: white;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  position: absolute;
  margin-left: 17px;
  top: 2px;
  transition: margin-left 1s;
}
</style>
    <!-- <div class="all-container">
      <div v-for="task in tasks" :key="task.id">
        <div
          class="picture-container"
          :class="[isCheck && 'picture-content-show']"
          @click="boxSwitch(task.id)"
        ></div>
      </div>
    </div> -->