<template>
  <div class="dashboard">
    <el-row :gutter="20" type="flex" justify="space-around">
      <el-col>
        <anchor id="group_manage" :level="3">
          基础信息
        </anchor>
      </el-col>
      <el-col :span="10">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span style="font-size: xx-large">群数量</span>
            </div>
          </template>
          <div v-loading="loading">
            {{ groupCount }}
          </div>
        </el-card>
      </el-col>
      <el-col :span="10">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span style="font-size: xx-large">好友数量</span>
            </div>
          </template>
          <div v-loading="loading">
            {{ friendCount }}
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" justify="space-around">
      <el-col :span="10">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span style="font-size: xx-large">触发命令数量</span>
            </div>
          </template>
          <div v-loading="loading">
            0
          </div>
        </el-card>
      </el-col>
      <el-col :span="10">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span style="font-size: xx-large">失败命令数量</span>
            </div>
          </template>
          <div v-loading="loading">
            0
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row :gutter="20" type="flex" justify="space-around">
      <el-col>
        <anchor id="group_manage" :level="3">
          群管理
        </anchor>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :offset="2" :span="20">
        <el-table stripe>
          <el-table-column
              prop="group_code"
              label="群号码"
              min-width="120">
          </el-table-column>
          <el-table-column
              prop="group_name"
              label="群名字"
              min-width="120">
          </el-table-column>
          <el-table-column
              prop="group_member_count"
              label="群成员数"
              min-width="120">
          </el-table-column>
        </el-table>
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
    const loading = ref(true)
    setTimeout(function () {
      loading.value = false
    }, 5000)
    return {
      groupCount,
      friendCount,
      loading
    }
  }
})

</script>

<style scoped>

</style>
