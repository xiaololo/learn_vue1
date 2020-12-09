<template>
  <div>
    <ul>
      <li v-for="item in listFather" :key="item.id">
        {{item.title}}
        <button @click="deleteItem(item.id)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import event from './event'
export default {
  props:{
    // 定义类型和默认值
    listFather:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      
    };
  },
  mounted() {
    //绑定自定义事件
    event.$on('onAddTit',this.addTitHandler)
  },
  deforeDestroy(){
    //及时销毁，负责可能造成内存泄露
    event.$off('onAddTit',this.addTitHandler)
  },
  methods: {
    deleteItem(id){
      this.$emit('delete',id)
    },
    addTitHandler(title){
      console.log('onaddTit',title)
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
