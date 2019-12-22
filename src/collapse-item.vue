<template>
  <div class="collapseItem">
    <div class="title" @click="toggle">
      {{ title }}
    </div>
    <div class="content" v-if="visible">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "unit-collapse-item",
  inject: ["eventBus"],
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    toggle() {
      if (this.visible) {
        this.close();
      } else {
        this.open();
      }
    },
    open() {
      this.visible = true;
      this.eventBus && this.eventBus.$emit("update:selected", this);
    },
    close() {
      this.visible = false;
    }
  },
  mounted() {
    this.eventBus &&
      this.eventBus.$on("update:selected", vm => {
        if (vm !== this) {
          this.close();
        }
      });
  }
};
</script>

<style scoped lang="scss">
$grey: #ddd;
$border-radius: 4px;
.collapseItem {
  > .title {
    border: 1px solid $grey;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }
  &:first-child {
    //第一个标题上边框圆角
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    .title:last-child {
      //最后一个折叠面板的最后一个元素为title时
      border-bottom: none;
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  > .content {
    padding: 8px;
  }
}
</style> 