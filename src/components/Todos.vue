<template>
  <div>
    <h1>{{ title }}</h1>
    <div>
      <AddList v-on:addTaskTo="addTaskTo"/>
    </div>
    <div v-bind:key="todo.id" v-for="todo in todos">
      <TodoItem v-bind:todo="todo" v-on:del_todo="$emit('del_todo', todo)"/>
    </div>
  </div>
</template>

<script>

  import TodoItem from './TodoItem' ;
  import AddList from './AddList';

export default {
  name: 'Todos',
  props: ['todos'],
  components: {
      TodoItem , AddList
  },
  methods : {
      addTaskTo(task){
         // console.log(task,'asdas');
          this.$emit('add_to_task_array',task);
      }
  } ,
  data(){
      return {
          title : 'To Do list'
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  background: black;
  color: white;
  padding: 10px;
  text-align: center;
}

</style>
