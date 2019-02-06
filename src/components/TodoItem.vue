<template>
    <div v-bind:class="{'is_completed':todo.completed}">
        <input type="checkbox" v-on:change="markComplete">
        <button @click="$emit('del_todo', todo)">Dlt</button>
        {{ todo.title }}
    </div>
</template>

<script>
    export default {
        name: "TodoItem",
        props : ['todo'],
        methods : {
            markComplete(){
                this.todo.completed = ! this.todo.completed;
            }
        }
    }
</script>

<style scoped>
div{
    height: 20px;
    border: 1px solid lightblue;
    text-align: center;
    padding: 10px;
}

.is_completed {
    text-decoration: line-through;
}
</style>