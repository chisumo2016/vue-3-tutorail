<template>
  <h2>Child Component B</h2>
  <ChildC />
</template>

<script>
import ChildC from "./ChildC";
export default {
  components:{ChildC},
  name: "ChildB"
}
</script>

<style scoped>

</style>