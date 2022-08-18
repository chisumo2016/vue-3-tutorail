<template>
  <h1>Component C</h1>
  <ComponentF/>
</template>

<script>
import ComponentF from "./ComponentF";
export default {
  name: "ComponentE",
  components:{
    ComponentF
  }
}
</script>

<style scoped>

</style>