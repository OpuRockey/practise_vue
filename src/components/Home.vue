<template>
    <div>
        <input type="number" v-model="inputVal"><br>
        Home sweet Home<br>
        Current value         : {{ inputVal }}<br>
        Computed Double value :{{ doubleInput }}<br>
        Watched less 5 value  :{{ lessFive }}<br>

    </div>
</template>

<script>
    export default {
        name: "Home",
        data(){
            return {
                inputVal : '',
                lessFive : ''
            }
        },
        computed : {
            doubleInput(){
                return this.inputVal * 2 ;
            }
        },
        watch : {
            inputVal(n,o){
                console.log('New Value - ' , n);
                console.log('Old Value - ' , o);
                this.lessFive = n - 5 ;
            }
        }
    }
</script>

<style scoped>

</style>