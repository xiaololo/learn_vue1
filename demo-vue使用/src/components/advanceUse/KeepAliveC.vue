<template>
  <div>
    state C
  </div>
</template>

<script>
export default {
  mounted(){
    console.log('C mounted')
  },
  destroyed() {
    console.log('C destroyed')
  },
};
</script>