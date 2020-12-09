<template>
  <div>
    <h2>表单form</h2>
    <p>输入框：{{name}}</p>
    <!-- 
      .lazy 在默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步 (除了上述输入法组合文字时)。你可以添加 lazy 修饰符，从而转为在 change 事件_之后_进行同步：
      .trim 自动过滤用户输入的首尾空白字符 
      .number 自动将用户的输入值转为数值类型
    -->
    <input type="text" v-model.lazy="name">
    <input type="text" v-model.trim="name"> 
    <input type="text" v-model.number="age">

    <p>多行文本：{{desc}}</p>
    <textarea v-model="desc" placeholder="add multiple lines"></textarea>
    <!-- <textarea>{{desc}}</textarea>是不被允许的 -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      name:"",
      age:"20",
      desc:"",
      checked:"",
    };
  },
  mounted() {
  },
  methods: {
    
  },
};
</script>

<style scoped>
</style>
