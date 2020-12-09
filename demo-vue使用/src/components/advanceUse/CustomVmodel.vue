<template>
  <div>
    <input type="text"
      :value="text1"
      @input="$emit('change1',$event.target.value)"
    >
    <!-- 
      1. 上面input 使用了 :value 而不是v-model
      2. 上面的change 和 model.event 要对应起来
      3. text1属性对应起来
     -->
  </div>
</template>

<script>
export default {
  model:{
    prop:'text1',//对应 props text
    event:'change1'
  },
  props:{
    text1:String,
    default(){
      return ''
    }
  },  
};
</script>

<style scoped>
</style>
