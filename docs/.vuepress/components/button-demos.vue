<template>
  <div>
    <u-button>默认按钮</u-button>
    <u-button icon="settings">默认按钮</u-button>
    <u-button :loading="true">默认按钮</u-button>
    <u-button disabled>默认按钮</u-button>
    <!-- <pre><code>{{content}}</code></pre> -->
  </div>
</template>

<script>
import Button from "../../../src/button";
export default {
  components: {
    "u-button": Button
  },
  data() {
    return {
      content: `
<u-button>默认按钮</u-button>
<u-button icon="settings">默认按钮</u-button>
<u-button :loading="true">默认按钮</u-button>
<u-button disabled>默认按钮</u-button>
          `
        .replace(/\t+| +/g, "")
        .trim()
    };
  }
};
</script>

<style>
</style>