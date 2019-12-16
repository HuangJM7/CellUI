<template>
  <div
    class="col"
    :class="[span && `col-${span}`, offset && `offset-${offset}`]"
    :style="{
      paddingLeft: +gutter / 2 + 'px',
      paddingRight: +gutter / 2 + 'px'
    }"
  >
    <div style="border:1px solid green;height:100px">
      <slot></slot>
    </div>
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
  },
  data() {
    return {
      gutter: 0
    };
  }
};
</script>

<style lang="scss" scoped>
.col {
  height: 100px;
  width: 50%;
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