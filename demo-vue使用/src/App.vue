<template>
  <div id="app">
    <div id="nav">
      <!-- 基本使用 -->
      <!-- <MbDemo/>  -->
      <!-- <computedDemo/>  -->
      <!-- <watchDemo/>  -->
      <!-- <classDemo/>  -->
      <!-- <condationDemo/>  -->
      <!-- <listDemo/>  -->
      <!-- <eventDemo/>  -->
      
      <!-- 组件使用 -->
      <!-- <compomentDemo/>  -->

      <!-- 高级特性 -->
      <advanceUse/> 

    </div>
    <router-view/>
  </div>
</template>
<script>
// @ is an alias to /src
import MbDemo from '@/components/BaseUse/mbDemo.vue'
// import computedDemo from '@/components/BaseUse/computedDemo.vue'
// import watchDemo from '@/components/BaseUse/watchDemo.vue'
// import classDemo from '@/components/BaseUse/classDemo.vue'
// import condationDemo from '@/components/BaseUse/condationDemo.vue'
// import listDemo from '@/components/BaseUse/listDemo.vue'
// import eventDemo from '@/components/BaseUse/eventDemo.vue'
// import compomentDemo from '@/components/compomentsDemo/index.vue'
import advanceUse from '@/components/advanceUse/index.vue'

export default {
  name: 'Home',
  components: {
    // MbDemo,
    // computedDemo,
    // watchDemo,
    // classDemo,
    // condationDemo,
    // listDemo,
    // eventDemo,
    // compomentDemo,
    advanceUse,
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
