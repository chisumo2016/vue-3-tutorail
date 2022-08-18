<template>
   <h3 v-for="name in names" :key="name.firstName">
<!--      {{ name.firstName}} {{ name.lastName}}-->
     <slot :firstName="name.firstName" :lastName="name.lastName"></slot>
   </h3>
</template>

<script>
export default {
   name: 'NameList',
  data(){
     return{
        //array of objects
       names: [
         {
           firstName : 'Bruce',
           lastName: 'Wayne'
         },
         {
           firstName : 'Clark',
           lastName: 'Kent'
         },
         {
           firstName : 'Princess',
           lastName: 'Diana'
         },
       ]
     }
  }
}
</script>

<style scoped>

</style>