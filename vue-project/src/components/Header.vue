<template>
  <nav class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-5">

    <router-link
        class="mx-2" v-for="item in list"
        :key="item.title"
        v-bind:to="item.to">{{ item.title}}</router-link>

     <button class="mx-2" @click="$emit('open-login-modal')">Login</button>
<!--    <router-link to="/calendar" class="mx-2"></router-link>-->
   </nav>



</template>

<script>
export default {
  name: "Header",
  data(){
     return{
       list:[
         {title: "Home", to: "/"},
         {title: "Dc Heros", to: "/dc-heros"},
         {title: "Calendar", to: "/calendar"},
         {title: "Markdown", to: "/markdown"},
         {title: "Slider Carousel", to: "/slider"},
       ]
     }
  }
}
</script>

<style scoped>

</style>