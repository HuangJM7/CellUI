<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "unit-tabs",
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0;
      }
    }
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  mounted() {
    if (this.$children.length === 0) {
      // 异步报错难以测试
      // throw new Error('tabs的子组件tabs-head和tabs-nav不存在')
      console.warn(`tabs的子组件tabs-head和tabs-nav不存在`);
    }
    // this.eventBus.$emit("update:selected", this.selected);
    this.$children.forEach(vm => {
      if (vm.$options.name === "ubit-tabs-head") {
        vm.$children.forEach(item => {
          if (
            item.$options.name === "unit-tabs-item" &&
            item.name === this.selected
          ) {
            this.eventBus.$emit("update:selected", this.selected, item);
          }
        });
      }
    });
  }
};
</script>
<style>
.tabs {
}
</style> 