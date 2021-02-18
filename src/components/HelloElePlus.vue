<template>
  <h1>{{ msg }}</h1>

  <el-button icon="el-icon-success" type="primary" @click="count++">count is: {{ count }}</el-button>

  <p>
    Edit
    <code>components/HelloElePlus.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts">
import {ref, defineComponent} from 'vue'

export default defineComponent({
  name: 'HelloElePlus',
  props: {
    msg: {
      type: String,
      required: true,
    }
  },
  setup: () => {
    const count = ref(0)
    return {count}
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}
</style>