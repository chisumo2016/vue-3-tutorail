<template>
  <div>
    {{ name}}
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: "DemoOne",
  setup(){ //composition
    //let name = 'Juice'
    let name = ref('juice')

    setTimeout(() =>{
      name = 'Codevolution'
      console.log(name)
    }, 2000)
    return{
      name
    }
  }
}
</script>

<style scoped>

</style>