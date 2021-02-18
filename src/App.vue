<template>
  <div id="inner-app">
    <img alt="Vue logo" src="./assets/logo.png"/>
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite"/>
    <div class="line"></div>
    <HelloElePlus msg="Hello Element Plus"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import HelloElePlus from './components/HelloElePlus.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    HelloElePlus
  }
})
</script>

<style scoped>
.line {
  height: 1px;
  background-color: #2f3e4e;
  margin: 35px -24px;
}

#inner-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>