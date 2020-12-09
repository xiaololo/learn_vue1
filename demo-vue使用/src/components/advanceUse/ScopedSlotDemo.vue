<template>
  <div>
    <a :href="url">
      <slot :slotDate="website">
        {{website.title}}
      </slot>
    </a>
  </div>
</template>

<script>
export default {
  props: ['url'],
  data() {
    return {
      website:{
        url:'http://www.baidu.com',
        title:'百度1',
        subTitle:'百度一下，你就知道1'
      }
    };
  },
};
</script>

<style scoped>
</style>
