<template>
 <div>
   <input type="text" :value="modalValue" @input="$emit('update.modalValue', $event.target.value)">
 </div>
</template>

<script>
export default {
  name: "Input",
  props:{
    modalValue: String
  }
}
</script>

<style scoped>
input[type = 'text']{
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.4;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>