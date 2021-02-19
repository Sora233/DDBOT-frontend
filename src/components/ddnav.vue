<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router>
    <el-menu-item index="DDBOT">
      <el-link style="font-size: large">DDBOT</el-link>
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
import {defineComponent, ref} from "vue";
import {useRoute, useRouter} from "vue-router";

export default defineComponent({
  name: "ddnav",
  setup() {
    const activeIndex = ref('DDBOT')
    const route = useRoute()
    const router = useRouter()
    router.afterEach((to, from) => {
      activeIndex.value = route.name
    })
    return {
      activeIndex
    }
  },
})
</script>

<style scoped>

</style>
