<template>
<h2>Child Component A</h2>
  <ChildB />
</template>

<script>
import ChildB from "./ChildB";
export default {
  components:{ChildB},
  name: "ChildA"
}
</script>

<style scoped>

</style>