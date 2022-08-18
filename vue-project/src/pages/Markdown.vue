<template>
  <div class="flex flex-wrap w-full">
    <h1 class="w-full text-center text-3xl my-4">Markdown App</h1>
    <section class=" flex h-screen w-10/12 m-auto">
      <article class="w-1/2 border">
        <textarea class="w-full h-full"  :value="text" @input="update"></textarea>
<!--        <textarea class="w-full h-full" v-model="text.lazy"></textarea>-->
      </article>
      <article class="w-1/2 border bg-gray-100" v-html="markedText"></article>
<!--      <article class="w-1/2 border bg-gray-100">{{ markedText }}</article>-->
    </section>
  </div>

</template>

<script>
import  marked from "marked" ;
import  debounce from "../utilities/mixins/debounce";
export default {

  mixins:[debounce],
  name: "Markdown",
  data(){
    return{
      text:" ",

    }
  },
  methods:{
    update(e){
        const  task = () =>(this.text = e.target.value);
        this.debounce(task, 500);
    },
    /* debounce(func, wait = 1000){
      clearTimeout(this.timeout)
      this.timeout = setTimeout(func, wait);
    }*/
  },
  computed:{
    markedText(){
      return marked(this.text)
    }
  }
}
</script>


/*update(e){*/
/*clearTimeout(this.timeout)*/
/*this.timeout = setTimeout(() =>{*/
/*                                this.text = e.target.value;*/
/*                              }, 500);*/
/*},*/
