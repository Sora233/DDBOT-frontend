<template>
  <div class="dashboard">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span style="font-size: xx-large">群数量</span>
            </div>
          </template>
          <div v-loading="true">
            {{ groupCount }}
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span style="font-size: xx-large">好友数量</span>
            </div>
          </template>
          {{ friendCount }}
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span style="font-size: xx-large">触发命令数量</span>
            </div>
          </template>
          3
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span style="font-size: xx-large">失败命令数量</span>
            </div>
          </template>
          4
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {defineComponent, ref} from "vue";
import anchor from "./anchor.vue";

export default defineComponent({
  name: "dashboard",
  components: {
    anchor,
  },
  setup() {
    const groupCount = ref(0)
    const friendCount = ref(0)
    return {
      groupCount,
      friendCount
    }
  }
})

</script>

<style scoped>

</style>
