<template>
  <div>
    {{name}} {{major}} {{city}}
    <button @click="showName">点击</button>
  </div>
</template>

<script>
import myMixin from './mixin'
export default {
  mixins:[myMixin],//可以添加多个，会自动合并起来
  data() {
    return {
      name:'lolo',
      major:"web前端"
    };
  },
};
</script>
