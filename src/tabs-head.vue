<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "ubit-tabs-head"
};
</script>
<style lang="scss" scoped>
$tab-height: 40px;
.tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  > .actions {
    margin-left: auto;
  }
}
</style> 