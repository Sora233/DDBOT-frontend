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
          1
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span style="font-size: xx-large">好友数量</span>
            </div>
          </template>
          2
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

export default defineComponent({
  name: "dashboard",
  setup() {
    const basicInfo = ref([{
      groupCount: 1,
      friendCount: 2,
    }])
    return {
      basicInfo
    }
  }
})

</script>

<style scoped>

</style>
