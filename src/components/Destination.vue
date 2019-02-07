<template>
    <div>
        Your Input is {{ getinputval() }}<br>
        Previous text is {{ getprevtext() }}
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
            },
            getprevtext : function(){
                return this.$store.getters.getprevtext[1] ;
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