<template>
   <Header @open-login-modal="isLoginOpen = true"/>

  <div class="w-full mx-auto flex">
    <router-view></router-view>
  </div>
  <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen = false"/>
</template>

<script>


import Header from "./components/Header";
import LoginModal from "./components/LoginModal";
export default {
  name: 'App',
  components: {
    Header,
    LoginModal
  },
  data(){
    return {
      isLoginOpen:false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
