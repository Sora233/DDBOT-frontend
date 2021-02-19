<template>
  <el-col :span="16" :offset="4">
    <div class="content-wrap">
      <section class="content">
        <anchor id="introduction" :level="2">
          简介
        </anchor>
        <p>一个DDBOT前端实现</p>
        <anchor id="contract" :level="2">
          联系
        </anchor>
      </section>
    </div>
  </el-col>
</template>

<script>
import {defineComponent, ref} from "vue";
import anchor from "./anchor.vue";

export default defineComponent({
  name: "help",
  components: {
    anchor,
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>

</style>