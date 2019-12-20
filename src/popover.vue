<template>
  <div class="popover" @click.stop="onClick" ref="popover">
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
    open() {
      //显示div并定位,添加关闭监听
      this.visible = true;
      this.$nextTick(() => {
        this.positionContent();
        document.addEventListener("click", this.onClickDocument);
      });
    },
    close() {
      //关闭div,移除关闭监听
      this.visible = false;
      document.removeEventListener("click", this.onClickDocument);
    },
    positionContent() {
      //负责div区域的定位
      document.body.appendChild(this.$refs.content);
      let {
        width,
        height,
        top,
        left
      } = this.$refs.trigger.getBoundingClientRect();
      this.$refs.content.style.left = left + window.scrollX + "px";
      this.$refs.content.style.top = top + window.scrollY + "px";
    },
    onClickDocument(e) {
      //负责非popover区域的点击关闭逻辑
      if (
        this.$refs.popover === e.target ||
        this.$refs.popover.contains(e.target)
      ) {
        return;
      }
      this.close();
    },
    onClick(e) {
      //负责 button 的点击关闭开启逻辑
      if (this.$refs.trigger.contains(e.target)) {
        if (this.visible === true) {
          this.close();
        } else {
          this.open();
        }
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