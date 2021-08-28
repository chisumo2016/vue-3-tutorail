<template>
  <div>
<!--    <h2>{{ state.firstName }} {{ state.lastName }}</h2>-->
    <h2>{{ firstName }} {{ lastName }}</h2>

    <h2>{{ fname}}  {{ lname}}</h2>
  </div>
</template>

<script>
import { reactive, toRefs} from "vue";

export default {
  name: "DemoTwo",
  setup(){
    const state = reactive({ //pass object
      firstName:'Princes',
      lastName:'Diana',
    })
    setTimeout(()=>{
      state.firstName = 'Clark'
      state.lastName ='Kent3'
      console.log(state)
    },2000)

    return toRefs(state)
   /* return {
      //state
      firstName: state.firstName,
      lastName: state.lastName,
    }*/
  },
  data(){
    return {
      fname:'Princes',
      lname:'Diana'

    }
  }
}
</script>

<style scoped>

</style>