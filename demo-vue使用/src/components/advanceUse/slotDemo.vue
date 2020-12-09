<template>
  <div>
    <a :href="url">
      <slot>
        默认内容，即父组没设置内容是，这是显示
      </slot>
    </a>
  </div>
</template>

<script>
export default {
  props: ['url'],
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>
