<template>
  <div>
    <h2>条件渲染</h2>
    <p v-if="type ==='a'">A</p>
    <p v-else-if="type ==='b'">B</p>
    <p v-else>other</p>

    <p v-show="type ==='a'">A by v-show</p>
    <p v-show="type ==='b'">B by v-show</p>

  </div>
</template>

<script>
export default {
  data() {
    return {
      type:'b'
    };
  },
};
</script>
<style scoped>
</style>
