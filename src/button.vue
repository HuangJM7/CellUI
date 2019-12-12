<template>
  <div>
    <button class="g-button">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#i-settings"></use>
      </svg>
      按钮
    </button>
  </div>
</template>

<script>
import "./iconfont";
export default {};
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
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
}
</style>