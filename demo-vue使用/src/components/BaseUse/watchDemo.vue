<template>
  <div>
    <h2>watch</h2>
    <input v-model="name" type="text">
    <input v-model="info.city" type="text">
  </div>
</template>

<script>
export default {
  data() {
    return {
      name:'lili',
      info:{
        city:"北京"
      }
    };
  },
  watch:{
    name(oldVal,val){
      console.log('watch name',oldVal,val)//值类型，可正常拿到
    },
    info:{
      handler(oldVal,val){
        console.log('watch info',oldVal,val)//引用类型 拿不到oldVal，因为引用类型赋值，因为指针相同，指向同一个地址
      },
      deep:true //深度监听
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
