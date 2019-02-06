<template>
    <div id="apptodo">
        <Todos v-bind:todos="todos" v-on:del_todo="del_todo" v-on:add_to_task_array="add_to_task_array"/>
        <router-view></router-view>
    </div>
</template>

<script>
    /*import HelloWorld from './components/HelloWorld.vue'
    import TestFile from './components/TestFile.vue'*/
    import Todos from './Todos';

    export default {
        name: 'TodosShow',
        components: {
            Todos
        },
        methods : {
            del_todo(data){
                console.log(data);
                this.todos = this.todos.filter(todo => todo.id !== data.id)
            },
            addTaskTo(task){
                console.log(task) ;
            },
            add_to_task_array(task){
                const d = new Date();
                const n = d.getTime();
                const newtask = {
                    id : n ,
                    title : task ,
                    completed : false
                }
                this.todos.push(newtask)
                console.log(this.todos);
            }

        } ,
        data(){
            return {
                todos : [
                    { id : 1 , title : 'To do 1' , completed : false },
                    { id : 2 , title : 'To do 2' , completed : true },
                    { id : 3 , title : 'To do 3' , completed : true },
                    { id : 4 , title : 'To do 4' , completed : false }
                ]
            }
        }
    }
</script>

<style>

</style>
