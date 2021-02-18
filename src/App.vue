<template>
  <div id="main-frame">
    <el-container>
      <el-header style="text-align: left; font-size: 12px">
        <ddnav></ddnav>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import ddnav from "./components/ddnav.vue"

export default defineComponent({
  name: 'App',
  components: {ddnav},
})
</script>
