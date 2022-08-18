<template>
 <div>
   <input type="text" placeholder="First Name" v-model="firstName">
   <input type="text" placeholder="Last Name" v-model="lastName">
 </div>
<!--  Props-->
  <PersonGreeting :firstName="firstName" :lastName="lastName"/>
  <PersonGreeting :firstName="firstName" :lastName="lastName" @callHeroes="callHeroes"/>
</template>

<script>
import {ref} from "vue";
import PersonGreeting from  './PersonGreeting'
export default {
  name: "Person",
  components:{PersonGreeting},
  setup(){ //CA
    const firstName = ref('')
    const lastName = ref('')

    //Handler
    function callHeroes(hero){
       alert(`Calling ${hero}`)
    }
    return{
      firstName,
      lastName,
      callHeroes
    }
  }
}
</script>

<style scoped>

</style>