<template>
  <h1>Component F</h1>
  <H2>Component F username {{ username}}</H2>
</template>

<script>
export default {
  name: "ComponentF",
  inject:['username']
}
</script>

<style scoped>

</style>