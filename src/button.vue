<template>
  <button
    class="c-button"
    :class="[`icon-${iconPosition}`]"
    @click="$emit('click')"
  >
    <c-icon class="icon" v-if="icon && !loading" :name="icon"></c-icon>

    <c-icon class="loading icon" v-if="loading" name="loading"></c-icon>

    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from "./icon";
export default {
  components: {
    "c-icon": Icon
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

.c-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
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
  .loading {
    animation: spin 1s infinite linear;
  }
}
</style>