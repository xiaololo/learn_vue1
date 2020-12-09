<template>
  <div>
    
    <Input @add="addHandler"/>
    <List :listFather="list" @delete="deleteHandler"/>
  </div>
</template>

<script>
import Input from './Input'
import List from './List'
export default {
  components:{
    Input,
    List
  },
  data() {
    return {
      list:[
        {
          id:"id 1",
          title:"标题 1"
        },
        {
          id:"id 2",
          title:"标题 2"
        },
      ]
    };
  },
  methods: {
    addHandler(title){
      this.list.push({
        id:`id-${Date.now()}`,
        title
      })
    },
    deleteHandler(id){
      this.list=this.list.filter(item=>item.id!=id)
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
