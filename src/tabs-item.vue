<template>
  <div class="tabs-item" @click="selecteing" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "unit-tabs-item",
  inject: ["eventBus"],
  data() {
    return {
      active: false
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      tyep: [String | Number],
      required: true
    }
  },
  computed: {
    classes() {
      return { active: this.active };
    }
  },
  methods: {
    selecteing() {
      this.eventBus.$emit("update:selected", this.name);
    }
  },
  created() {
    this.eventBus.$on("update:selected", name => {
      this.active = name === this.name;
    });
  }
};
</script>
<style lang='scss' scoped>
.tabs-item {
  flex-shrink: 0;
  padding: 0 2em;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  border: 1px solid red;
  &.active {
  }
}
</style> 