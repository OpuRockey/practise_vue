<template>
    <div>
        Users Overview <br>
        <Source/> <br>
        <Destination/>
    </div>
</template>

<script>
    import Source from './Source';
    import Destination from './Destination' ;
    export default {
        name: "Users",
        components : {
            Source , Destination
        }
    }
</script>

<style scoped>

</style>