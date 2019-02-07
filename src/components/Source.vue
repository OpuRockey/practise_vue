<template>
    <div>
        <input type="text" v-model="changeinput">
    </div>
</template>

<script>
    export default {
        name: "Source",
        data(){
            return {
                changeinput : ''
            }
        },
        watch : {
            changeinput(n,o){
                console.log(o);
                this.$store.commit('changeinput' , n);
            }
        }
    }
</script>

<style scoped>

</style>