<template>
  <div>
    <h2 @mouseover="incrementCount"> Hover {{ count }} times</h2>
  </div>
</template>

<script>
//import CounterMixin from '../mixins/counter'
import useCounter from "../composables/useCounter";
export default {
  name: "HoverCounter",
  setup(){
    const {count, incrementCount} = useCounter()
    return{
      count,
      incrementCount
    }
  }
  //mixins:[CounterMixin]
}
</script>

<style scoped>

</style>