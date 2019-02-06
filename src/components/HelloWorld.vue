<template>
  <div class="hello">
    Hello from Hello World {{ msg }} {{ myVar }}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
      return {
          myVar : 'Yes It is'
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
