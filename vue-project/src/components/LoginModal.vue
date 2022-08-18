<template >
   <section
       @click="$emit('close-login')"
       class="h-screen w-screen bg-gray-500 fixed top-0 opacity-50 z-20"></section>
   <div class="absolute inset-0">
     <div class="flex h-full">
       <div class="m-auto bg-white p-2 rounded shadow z-30 w-1/3">
         <div class="p-2 border">
           <h1 class="tex-2xl text-center"> Login</h1>
           <form action="" class="p-2 my-2" @submit.prevent="submit">
             <div class="my-4">
               <label >Email or Username</label>
               <input
                   v-model="form.email"
                   type="text"
                   class="rounded shadow p-2 w-full"
                   placeholder="Enter Your Email or username">
             </div>
             <div class="my-4">
               <label >Password</label>
               <input
                   v-model="form.password"
                   type="password"
                   class="rounded shadow p-2 w-full"
                   placeholder="Enter Your Password">
             </div>

             <div class="my-4">
                <button
                    class="w-full rounded shadow-md bg-gradient-to-r from-red-800 to-pink-800 text-white p-2"
                    type="submit">Login</button>
             </div>
           </form>
         </div>
       </div>
     </div>
   </div>

</template>

<script>
import firebase from "../utilities/firebase";
export default {
  name: "LoginModal",
  data(){
    return{
      form:{
        email:"",
        password:""
      }
    }
  },
  methods:{
    submit(){
      //Submit the form
      firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
              .then(res =>{
                console.log(res)
              }).catch(e =>{
                console.log(e);

      })
    }
  }

}
</script>

<style scoped>

</style>