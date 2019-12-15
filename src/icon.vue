<template>
  <svg class="u-icon" aria-hidden="true">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import "./iconfont";//iconfont数据

export default {
  props: {
    name: {}
  }
};
</script>

<style lang="scss">
.u-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>