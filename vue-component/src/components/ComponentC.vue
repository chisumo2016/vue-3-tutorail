<template>
 <h1>Component C</h1>
  <ComponentE/>
</template>

<script>
import ComponentE from "./ComponentE";
export default {
  name: "ComponentC",
  components:{
    ComponentE,
  }
}
</script>

<style scoped>

</style>