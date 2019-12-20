<template>
  <div class="popover" @click.stop="onClick">
    <div class="content" v-if="visible">
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

      if (this.visible === true) {
        this.$nextTick(() => {
          let hander = () => {
            this.visible = false;
            console.log("document");
            document.removeEventListener("click", hander);
          };
          document.addEventListener("click", hander);
        });
      }
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