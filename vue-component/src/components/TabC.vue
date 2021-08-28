<template>
   <div>
       <h2>Tab C Content</h2>
     <input type="text" v-model="name" placeholder="Dynamic Keep alive">
   </div>
</template>

<script>
export default {
  name: "TabC",
  data(){
    return{
      name:''
    }
  }
}
</script>

<style scoped>

</style>