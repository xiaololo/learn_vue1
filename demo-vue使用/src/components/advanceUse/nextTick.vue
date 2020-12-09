<template>
  <div>
    <ul ref="ul1">
      <li v-for="(item,index) in list" :key="index">{{item}}</li>
    </ul>
    <button @click="add">添加项</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["a", "b", "c"],
    };
  },
  methods: {
    add() {
      this.list.push(Date.now());
      this.list.push(Date.now());
      this.list.push(Date.now());

      const ulElem = this.$refs.ul1; //获取ul的DOM节点
      console.log(ulElem.childNodes.length); //此时data改变之后，DOM不会立刻渲染，获取不到最新的DOM节点

      // $nextTick会在DOM渲染之后被触发，以获取最新DOM节点
      this.$nextTick(() => {
        const ulElem = this.$refs.ul1; //获取ul的DOM节点
        console.log(ulElem.childNodes.length); //$nextTick会在DOM渲染之后被触发,此时已经是最新的DOM节点
      });

      // 1. 异步渲染，$nextTick 待DOM渲染完再回调
      // 2. 页面渲染是，会将data的修改做整合，多次data修改只会渲染一次
    },
  },
};
</script>

<style scoped>
</style>
