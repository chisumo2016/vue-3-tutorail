<template>
 <div>
  <!-- Options API    -->
   <input type="text" placeholder="Name" v-model="name">
   <br>
   <hr>


   <!-- Composition  API  with refs   -->
   <input type="text" placeholder="First Name" v-model="firstName">
   <input type="text" placeholder="Last Name" v-model="lastName">

   <!-- Composition  API  with Reactive   -->
   <input type="text" placeholder="Reactive First Name" v-model="fName">
   <input type="text" placeholder="Reactive Last Name" v-model="lName">
   <input type="text" placeholder="Reactive Hero Name" v-model="options.heroName">

 </div>
</template>

<script>
import {ref , watch ,reactive, toRefs} from "vue";
import _ from 'lodash';
export default {
  name: "Watch",
  setup(){
    //Reactive
    const state = reactive({
      fName : '',
      lName : '',
      options:{ //object
        heroName: ''

      }
    })
    //watcher reactive
   /* watch(state, function (newValue, oldValue){
      console.log('fName Old value', oldValue.fName)
      console.log('lName New value', newValue.fName)
      console.log('lName Old value', oldValue.lName)
      console.log('lName New value', newValue.lName)
      //OR
    })*/
/* watch(()=>{
   //RETURN OBJECT
   return{
     ...state
   }
 }, function (newValue, oldValue){
  console.log('fName Old value', oldValue.fName)
  console.log('lName New value', newValue.fName)
  console.log('lName Old value', oldValue.lName)
  console.log('lName New value', newValue.lName)

})*/
    //watch(()=>state.fName, function (newValue, oldValue){
    watch(()=> _.cloneDeep(state.options),
        function (newValue, oldValue){
      console.log('fName Old value', oldValue)
      console.log('lName New value', newValue)
    },{
         deep: true
        })


//define ref
const firstName = ref('')
const lastName = ref('')
//watch
// watch(firstName, (newValue, oldValue) =>{
watch([firstName, lastName], (newValues, oldValues) =>{
  console.log('FistName Old value', oldValues[0])
  console.log('FistName New value', newValues[0])
  console.log('LastName Old value', oldValues[1])
  console.log('LastName New value', newValues[1])
},
    {immediate:true,})
return{
  firstName,
  lastName,
  ...toRefs(state)

}
},
data(){
return{
  name: '',
}
},
watch:{
name(newValue, oldValue){
  console.log('Old value', oldValue)
  console.log('New value', newValue)
}
}
}
</script>

<style scoped>

</style>