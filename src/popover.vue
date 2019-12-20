<template>
  <div class="popover" @click="onClick">
    <div class="content" v-show="visible">
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "unit-popover",
  data() {
    return {
      visible: false
    };
  },
  methods: {
    onClick() {
      this.visible = !this.visible;
    }
  }
};
</script>

<style lang="scss" scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
  .content {
    position: absolute;
    left: 100%;
  }
}
</style>