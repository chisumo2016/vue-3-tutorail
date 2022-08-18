<template>
     <h3>Parent component  {{ name}}</h3>
     <h3>Parent component count  {{ count}}</h3>
     <h3>Parent component hero  {{ firstName}} {{ lastName}}</h3>
      <button @click="incrementCount">INCREMENT count</button>
     <ChildA/>
</template>

<script>
import {provide, ref, reactive,toRefs} from "vue";
import ChildA from "./ChildA";
export default {
  components:{ChildA},
  name: "ProvideInject",
  //composition setup
  setup(){
    provide('c_userName','Tanzania')

    //Refs
    const count = ref(0)
    function incrementCount(){
      count.value++
    }

    //Reactive
    const state = reactive({
      firstName: 'Bruice',
      lastName: 'Wayne',
    })
    //provide func
    provide('c_count',count)
    provide('c_hero',state)
    provide('incrementCount', incrementCount)

    return{
      count,
      ...toRefs(state),
      incrementCount
    }


  },
  data(){
    return{
      name:'Tanzania',
    }
  },
  provide(){
    return{
      userName: this.name
    }
  }
}
</script>

<style scoped>

</style>