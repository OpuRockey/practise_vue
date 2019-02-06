<template>
    <div>
        This is from test file {{ newmsg }} {{ myname }}
    </div>
</template>

<script>

    import { exampleMixin } from '../mixins/exampleMixin' ;


    export default {
        name: 'TestFile',
        mixins: [exampleMixin],
        props: {
            newmsg: String
        },
        data : function(){
            return {
                myname : 'Something'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    div {
        margin: 140px 0 0;
    }
</style>
