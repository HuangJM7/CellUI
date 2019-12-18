<template>
  <div class="toast" ref="wrapper">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">{{
      closeButton.text
    }}</span>
  </div>
</template>

<script>
export default {
  name: "unit-toast",
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 5
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: "关闭",
          callback: toast => {
            toast.close();
          }
        };
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close() {
      this.$el.remove();
      this.$destroy();
    },
    onClickClose() {
      this.close();
      //防御性编程
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback(this); //this即toast实例
      }
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    },
    updataStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${
          this.$refs.wrapper.getBoundingClientRect().height
        }px`;
      });
    }
  },
  mounted() {
    this.updataStyles();
    this.execAutoClose();
  }
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  font-size: $font-size;
  line-height: 1.8;
  min-height: $toast-min-height;
  display: flex;
  align-items: center;
  color: white;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0px 3px 0px rgba(0, 0, 0.5);
  padding: 0 16px;
  .message {
    padding: 8px 0;
  }
  .close {
    flex-shrink: 0;
    padding-left: 16px;
  }
  .line {
    height: 100%;
    border-left: 1px solid #777;
    margin-left: 16px;
  }
}
</style>