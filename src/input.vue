<template>
  <div class="wrapper">
    <input type="text" />
  </div>
</template>

<script>
export default {
  name: "unit-input"
};
</script>

<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
.wrapper {
  > input {
    height: $height;
    border: 1px solid $border-color;
  }
}
</style>