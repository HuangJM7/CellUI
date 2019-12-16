<template>
  <div
    class="col"
    :class="[span ? `col-${span}` : '', offset ? `offset-${offset}` : '']"
  >
    <slot></slot>
  </div>
</template>
    
<script>
export default {
  name: "unit-col",
  props: {
    // span: {type: [String, Number]}
    span: [String, Number], //简写
    offset: {
      type: [String, Number]
    }
  }
};
</script>

<style lang="scss" scoped>
.col {
  height: 100px;
  background: gray;
  width: 50%;
  border: 1px solid red;
  $class-prefix: col-;
  //scss for loop
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>