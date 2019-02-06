<template>
    <div>
        Add New Task : <input v-model="task" type="text">
        <button v-on:click="addTask">Add</button>
    </div>
</template>

<script>
    export default {
        name: "AddList",
        methods : {
            addTask(){
                this.$emit('addTaskTo' , this.task);
                this.task = '';
            }
        },
        data(){
            return{
                task : ''
            }
        }

    }
</script>
<style scoped>
div{
    padding: 10px;
    text-align: center;
}
</style>