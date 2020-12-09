<template>
  <div>
    <h2>事件</h2>
    <p>{{num}}</p>
    <button @click="increment1">+1</button>
    <button @click="increment2(2,$event)">+2</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num:0
    };
  },
  methods: {
    increment1(event){
      //当前方法没有参数，可以直接获取event对象
      console.log(event,event.__proto__.constructor) //是原生的 event 对象
      console.log(event.target)
      console.log(event.currentTarget)//事件被注册到当前元素上
      this.num++
      // 1.event是原生的
      // 2.事件被挂载到当前元素
    },
    increment2(val,event){
      //当前方法有参数，event需要手动传入才能获取
      console.log(event.target)
      this.num=this.num+2
    },
  },
};
</script>

<style scoped>
</style>
