<template>
    <div>
        Your Input is {{ getinputval() }}
    </div>
</template>

<script>
    export default {
        name: "Destination",
        data(){
          return {

          }
        },
        methods : {
            getinputval : function(){
                let currentVal = this.$store.getters.getinputval ;
                    currentVal = (currentVal.length > 0) ? currentVal : '???' ;
                    return  currentVal;
            }
        },
        computed : {

        },
        watch : {

        }
    }
</script>

<style scoped>

</style>