<template>
 <h2>Options - {{ o_firstName}}</h2>
 <h2>Options - {{ o_firstName}} {{ o_lastName}} a.k.a {{ o_heroName}}</h2>

 <h2>Composition- {{ c_firstName }}</h2>
 <h2>Composition- {{ greet }}</h2>


  <h3>Composition - {{ c_firstName}} {{ c_lastName}} a.k.a {{ c_heroName}}</h3>
  <h2>Composition- {{ greetHero}}</h2>


  <h3>Composition - {{ state.firstName}} {{ state.lastName}} {{ state.heroName}}</h3>
  <h2>Composition- {{ reactiveGreetHero}}</h2>



</template>

<script>
import { ref , reactive } from 'vue'
export default {
  name: "Data",
  setup() {
    const c_firstName = ref('clark')
    const c_lastName = ref('Kent')
    const c_heroName = ref('Superman')

    //c_firstName .value ='Diana'

    const greet = `Hello ${c_firstName .value}`
    const greetHero = `Hello ${c_firstName .value} ${c_lastName .value} a.k.a ${c_heroName .value}`

    //Reactive
   const state = reactive({
      //accept an object
      firstName:'Princes',
      lastName:'Diana',
      heroName: 'Wonder Man'
    })
    const reactiveGreetHero = `Hello ${c_firstName .value} ${c_lastName .value} a.k.a ${c_heroName .value}`
    //console.log('c_firstName',c_firstName )


    return{
      c_firstName,
      c_lastName,
      c_heroName,
      greet,
      greetHero,
      state,
      reactiveGreetHero
    }
  },
  data(){
    return {
      o_firstName: 'Bruce',
      o_lastName: 'Wayne',
      o_heroName: 'Batman',

    }
  }
}
</script>

<style scoped>

</style>