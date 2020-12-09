<template>
  <div>
    <h2>class style</h2>
    <p :class="{black:isBlack,yellow:isYellow}">使用class</p>
    <p :class="[black,yellow]">使用class</p>
    <p :style="styleData">使用style</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBlack:true,
      isYellow:true,

      black:"black",
      yellow:"yellow",

      styleData:{
        fontSize:'40px',//转换为驼峰式
        color:'red',
      }
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
