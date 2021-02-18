<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router>
    <el-menu-item>
      <el-link style="font-size: large" href="/">DDBOT</el-link>
    </el-menu-item>
    <el-menu-item index="dashboard">
      <template #title>
        <i class="el-icon-location"></i>
        <span>数据面板</span>
      </template>
    </el-menu-item>
    <el-menu-item index="help"><span>帮助</span></el-menu-item>
  </el-menu>
</template>

<script>
import {ref} from "vue";

export default {
  name: "ddnav",
  setup() {
    const activeIndex = ref('dashboard')
    return {
      activeIndex
    }
  },
}
</script>

<style scoped>

</style>
