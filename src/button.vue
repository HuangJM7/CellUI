<template>
  <button class="g-button" :class="[`icon-${iconPosition}`]">
    <svg v-if="icon" class="icon" aria-hidden="true">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import "./iconfont";
export default {
  props: ["icon", "iconPosition"]
};
</script>

<style lang="scss">
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(border-color);
  background: var(--button-bg);
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
    }
    > .content {
      order: 1;
    }
  }
}
</style>