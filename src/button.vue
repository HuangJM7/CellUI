<template>
  <button
    class="u-button"
    :class="[`icon-${iconPosition}`]"
    @click="$emit('click')"
  >
    <u-icon class="icon" v-if="icon && !loading" :name="icon"></u-icon>

    <u-icon class="loading icon" v-if="loading" name="loading"></u-icon>

    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from "./icon";
export default {
  name: "unit-button",
  components: {
    "u-icon": Icon
  },
  // props: ["icon", "iconPosition"]
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      }
    }
  }
};
</script>

<style lang="scss">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
$font-size: 14px;
$button-height: 32px;
$button-bg: white;
$border-radius: 4px;
$border-color: #999;
$border-color-hover: #666;
$button-active-bg: #eee;
.u-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
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
  .loading {
    animation: spin 1s infinite linear;
  }
}
</style>