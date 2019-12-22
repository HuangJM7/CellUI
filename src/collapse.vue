<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "unit-collapse",
  props: {
    single: {
      type: Boolean,
      default: false
    },
    selected: {
      default() {
        return [];
      },
      type: Array | String
    }
  },
  data() {
    return {
      eventBus: new Vue(),
      dataSelected: (() => {
        if (typeof this.selected === "object") {
          return JSON.parse(JSON.stringify(this.selected));
        } else {
          return eval(this.selected);
        }
      })()
    };
  },
  watch: {
    selected: function() {
      this.dataSelected = JSON.parse(JSON.stringify(this.selected));
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  mounted() {
    //发布初始化数据
    this.eventBus.$emit("update:selected", this.dataSelected);
    //订阅增加事件
    this.eventBus.$on("update:addSelected", name => {
      console.log(this.dataSelected);
      if (this.single) {
        this.dataSelected = [name];
      } else {
        this.dataSelected.push(name);
      }
      let selectedCopy = JSON.parse(JSON.stringify(this.dataSelected));
      this.eventBus.$emit("update:selected", selectedCopy);
      this.$emit("update:selected", selectedCopy);
    });
    //订阅删除事件
    this.eventBus.$on("update:removeSelected", name => {
      let index = this.dataSelected.indexOf(name);
      this.dataSelected.splice(index, 1);
      let selectedCopy = JSON.parse(JSON.stringify(this.dataSelected));
      this.eventBus.$emit("update:selected", selectedCopy);
      this.$emit("update:selected", selectedCopy);
    });
  }
};
</script>

<style scoped lang="scss">
$grey: #ddd;
$border-radius: 4px;
.collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style> 