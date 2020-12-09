<template>
  <div>
    <h2>advanceUse</h2>

    <!-- 自定义 v-model -->
    <p>{{name}}</p>
    <CustomVmodel v-model="name" />

    <nextTick/>


    <!-- slot -->
     <!-- 基本使用 -->
    <slotDemo :url="website.url">
      {{website.title}}
    </slotDemo>
    <!-- 
      作用域插槽 
        1.从子组件 slot 里定义一个属性，对应到website数据上
        2.在父组件里定义 template 设置v-slot为任意命名参数slotProps，
        3.数据取值为：slotProps.子组件命名数据.具体数据字段 
    -->
    <ScopedSlotDemo :url="website.url">
      <template v-slot="slotProps">
        {{slotProps.slotDate.title}}
      </template>
    </ScopedSlotDemo>

    <!-- 具名插槽 -->
    <!-- 子组件 NameSlot  -->
    <div>
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <solt></solt>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
    <!-- 父组件 -->
   <NameSlot>
     <template v-slot:header>
       <h1>将插入 header slot中</h1>
     </template>
     <p>将插入 main slot中,及未命名的slot</p>
     <template v-slot:footer>
       <h1>将插入 footer slot中</h1>
     </template>
   </NameSlot>

   <!-- 动态组件 -->
   <!-- <component :is="nextTickName"></component> -->

   <!-- Keep-alive -->
   <KeepAlive/>
   
   <!-- Mixin -->
   <MixinDemo/>
  </div>
</template>

<script>
import CustomVmodel from './CustomVmodel'
// import nextTick from './nextTick'
// import slotDemo from './slotDemo'
// import ScopedSlotDemo from './ScopedSlotDemo'
// import KeepAlive from './KeepAlive'
import MixinDemo from './MixinDemo'
export default {
  components:{
    CustomVmodel,
    // nextTick,
    // slotDemo,
    // ScopedSlotDemo,
    // KeepAlive,
    MixinDemo,
  },
  data() {
    return {
      name: "lolo",
      website:{
        url:'http://www.baidu.com',
        title:'百度',
        subTitle:'百度一下，你就知道'
      },
      nextTickName:"nextTick"
    };
  },
  
};
</script>

<style scoped>
</style>
