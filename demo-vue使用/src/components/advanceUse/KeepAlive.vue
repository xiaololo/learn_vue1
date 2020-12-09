<template>
  <div>
    <button @click="state ='A'">A</button>
    <button @click="state ='B'">B</button>
    <button @click="state ='C'">C</button>
    <KeepAliveA v-if="state ==='A'"/>
    <KeepAliveB v-if="state ==='B'"/>
    <KeepAliveC v-if="state ==='C'"/>
    <!-- v-if可以根据条件销毁和重新渲染组件 -->
    <!-- 
      每次切换都会触发另外元素的销毁和重新渲染 ，
      通过缓存组件的方式，优化vue性能
    -->
    <keep-alive>
      <KeepAliveA v-if="state ==='A'"/>
      <KeepAliveB v-if="state ==='B'"/>
      <KeepAliveC v-if="state ==='C'"/>
    </keep-alive>
    <!-- 常用场景：tab切换，如果标签简单可以使用 v-show -->
    
  </div>
</template>

<script>
import KeepAliveA from './KeepAliveA'
import KeepAliveB from './KeepAliveB'
import KeepAliveC from './KeepAliveC'
export default {
  components:{
    KeepAliveA,
    KeepAliveB,
    KeepAliveC
  },
  data() {
    return {
      state:'A',
    };
  },
};
</script>

<style scoped>
</style>
