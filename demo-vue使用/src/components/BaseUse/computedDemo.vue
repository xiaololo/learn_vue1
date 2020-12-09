<template>
  <div>
    <h2>computedDemo</h2>
    <p>原值：{{num}}</p>
    <p>计算结果：{{double1}}</p>
    输入框使用computed双向改变 <input type="text" v-model="double2">
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 2,
    };
  },
  computed: {
    //普通文本使用computed
    double1() {
      return this.num * 2;
    },
    // input 使用computed,双向改变
    double2:{
      get(){
        return this.num*2
      },
      set(val){
        this.num=val/2
      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
