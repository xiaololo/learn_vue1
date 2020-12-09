<template>
  <div>
    state B
  </div>
</template>

<script>
export default {
  mounted(){
    console.log('B mounted')
  },
  destroyed() {
    console.log('B destroyed')
  },
};
</script>