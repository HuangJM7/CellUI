<template>
  <div class="popover" @click.stop="onClick">
    <div class="content" v-if="visible" ref="content">
      <slot name="content"></slot>
    </div>
    <span ref="trigger">
      <slot></slot>
    </span>
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
          document.body.appendChild(this.$refs.content);
          let {
            width,
            height,
            top,
            left
          } = this.$refs.trigger.getBoundingClientRect();
          this.$refs.content.style.left = left + window.scrollX + "px";
          this.$refs.content.style.top = top + window.scrollY + "px";

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
}
.content {
  position: absolute;
  left: 100%;
  transform: translateX(100%);
}
</style>