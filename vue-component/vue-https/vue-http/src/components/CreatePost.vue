<template>
  <div>
    <form action="" @submit.prevent="createPost">
      <div>
        <label for="userId">Post User Id</label>
        <input type="text" id="userId" v-model="formData.UserId">
        <label for="title">Post Title</label>
        <input type="text" id="title" v-model="formData.title">
        <label for="body">Post Body</label>
        <input type="text" id="body" v-model="formData.body">
      </div>
      <button>Create Post</button>
    </form>

  </div>
</template>

<script>
import axios from "axios";
export default {

  name: "CreatePost",
  data(){
    return{
      formData:{
        UserId : '',
        title: '',
        body: ''
      }
    }
  },
  methods:{
    createPost(){
      axios.post('https://jsonplaceholder.typicode.com/posts', this.formData)
          .then((response) =>{
            console.log(response.data)
            this.posts = response.data
          })
          .catch(error =>{
            console.log(error)
            this.errorMsg =("Error of retriving data")
          })

    }
  }
}
</script>

<style scoped>

</style>