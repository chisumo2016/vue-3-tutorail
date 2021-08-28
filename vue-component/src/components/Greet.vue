<template>
  <h2>Hallo {{ name}} a.k.a {{ heroName}}</h2>

</template>

<script>
export default {
  name: "Greet",
  props:[
      'name',
      'heroName'

  ]
}
</script>

<style scoped>

</style>