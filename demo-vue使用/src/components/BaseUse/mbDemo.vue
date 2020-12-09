<template>
  <div>
    1.插值、表达式、
    <p>文本插值：{{message}}</p>
    <p>JS表达式{{flag?'yes':'no'}}(只能是表达式，不能是js语句)</p>

    2.指令、动态属性
    <p :id="myId">动态属性</p>

    3.v-html：会有XSS风险，会覆盖子组件
    <p v-html="myhtml"> 
        <span>有XSS风险</span>
        <span>【注意】使用v-html后，将会覆盖子元素</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "hello vue",
      flag:true,
      myId:`id-${Date.now()}`,
      myhtml:"指令-原始html <b>加粗</b> <i>斜体</i>"
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
