<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line" v-show="show"></div>
    <div class="actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "ubit-tabs-head",
  inject: ["eventBus"],
  data() {
    return {
      show: true //show控制初始化时line的动画
    };
  },
  mounted() {
    this.eventBus.$on("update:selected", (item, vm) => {
      this.show = true;
      let { width, height, top, left } = vm.$el.getBoundingClientRect();
      console.log(width, height, top, left);

      this.$refs.line.style.width = `${width}px`;
      // this.$refs.line.style.left = `${left - 20}px`;
      this.$refs.line.style.transform = `translateX(${left - 20}px)`;
    });
  }
};
</script>
<style lang="scss" scoped>
$tab-height: 40px;
$blue: blue;
.tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  position: relative;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $blue;
    transition: all 0.3s;
  }
  > .actions {
    margin-left: auto;
  }
}
</style> 