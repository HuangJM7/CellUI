<template>
  <div class="wrapper" :class="{ error }">
    <input
      type="text"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      @change="$emit('change', $event)"
      @input="$emit('input', $event)"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
    />
    <template v-if="error">
      <u-icon name="error" class="icon-error"></u-icon>
      <span class="error-message">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import Icon from "./icon";
export default {
  name: "unit-input",
  components: {
    "u-icon": Icon
  },
  props: {
    value: {
      type: String
    },
    disabled: {
      default: false
    },
    readonly: {
      default: false
    },
    error: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f14530;
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 0 8px;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &:disabled {
      border-color: #aaa;
      color: #aaa;
      cursor: not-allowed;
    }
    &:read-only {
      border-color: #aaa;
      color: #aaa;
    }
  }
  &.error {
    > input {
      border-color: $red;
    }
  }
  .icon-error {
    fill: $red;
  }
  .error-message {
    color: $red;
  }
}
</style>