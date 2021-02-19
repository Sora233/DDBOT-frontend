<template>
  <h1 v-if="level === 1">
    <a :href="`#${id}`">
      <slot></slot>
    </a>
  </h1>
  <h2 v-else-if="level === 2">
    <a :href="`#${id}`">
      <slot></slot>
    </a>
  </h2>
  <h3 v-else-if="level === 3">
    <a :href="`#${id}`">
      <slot></slot>
    </a>
  </h3>
  <h4 v-else-if="level === 4">
    <a :href="`#${id}`">
      <slot></slot>
    </a>
  </h4>
  <h5 v-else-if="level === 5">
    <a :href="`#${id}`">
      <slot></slot>
    </a>
  </h5>
  <h6 v-else-if="level === 6">
    <a :href="`#${id}`">
      <slot></slot>
    </a>
  </h6>

</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "anchor",
  props: {
    id: {
      type: String,
      required: true,
    },
    level: {
      type: Number,
      required: true,
    }
  },
  setup() {
    const show = ref('hidden')
    return {
      show
    }
  }
})
</script>

<style scoped lang="scss">
@mixin hstyle {
  position: relative;
}

h1 {
  @include hstyle;
  font-size: 2.2em;
}

h2 {
  @include hstyle;
  font-size: 2em;
}

h3 {
  @include hstyle;
}

h4 {
  @include hstyle;
}

h5 {
  @include hstyle;
}

h6 {
  @include hstyle;
}

a {
  text-decoration: none;
  color: #303133;
}

a:before {
  content: "#";
  color: #909399;
  position: absolute;
  left: -0.7em;
  top: 0.45em;
  padding-right: 0.5em;
  font-size: 0.8em;
  line-height: 1;
  font-weight: bold;
}
</style>
