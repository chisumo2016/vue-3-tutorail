<template>
 <div>
     <h2>{{ name }}</h2>
     <button @click="setName">Change Name</button>
     <h2>{{ count}}</h2>
   <button @click="IncrementCount">Increment Count</button>

   <h2>{{ first}} {{ last}}</h2>
   <button @click="changeHero">Change Hero</button>
 </div>
</template>

<script>
import { ref ,reactive, toRefs } from 'vue'
export default {
  name: "Methods",
  setup(){  // composition api
    const count = ref(0)
    function IncrementCount() { // composition api
      count.value++
    }

    const  state = reactive({
      first: 'Bruce',
      last: 'Wayne'
    })

    function changeHero(){ // composition api
      state.first =  'Clark'
      state.last =  'Clark'
    }
    return{
       count,
      IncrementCount,
      ...toRefs(state),
      changeHero
    }
  },
  data(){
    return{
      name : 'Methods API '
    }
  },
  methods:{
    setName(){
      this.name = 'Bernard'
    }
  }
}
</script>

<style scoped>

</style>