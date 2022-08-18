<template>
  <div class="flex flex-wrap w-full relative">
    <div class="absolute w-full" v-for="(color,index) in sliders" :key="color">
      <transition>
        <div
            v-if="currentSlide == index" :class="color" style="height: 350px;">
        </div>
      </transition>
    </div>
    <div class="w-full" style="height: 340px;">
      <div class="absolute bottom-0 w-full flex justify-center">
        <div
            class="w-4 h-4 mx-2 rounded-full cursor-pointer"
            v-for="(slider, index) in sliders"
            @click="makeActive(index)"
            :class="currentSlide == index ? 'bg-gray-700' : 'bg-gray-300'"
            :key="slider">
        </div>
      </div>
    </div>

<!--    <div class="my-10 flex w-full">-->
<!--       <div class="m-auto">-->
<!--         <transition name="fade">-->
<!--           <h1 v-if="isTitleShowing">Slider Carousel </h1>-->
<!--         </transition>-->

<!--         <button @click="isTitleShowing = !isTitleShowing" class="px-2 rounded border">Toggle Text</button>-->
<!--       </div>-->
<!--    </div>-->

  </div>

  <!--    <div-->
  <!--        v-if="currentSlide == 1"-->
  <!--        class="absolute w-full bg-yellow-600"  style="height: 350px;"></div>-->
  <!--    <div-->
  <!--        v-if="currentSlide == 2"-->
  <!--        class="absolute w-full bg-teal-600"    style="height: 350px;"></div>-->
</template>

<script>
export default {
  name: "Slider",
  data(){
    return{
      currentSlide: 1,
      interval: "",
      sliders:[
           'bg-blue-600',
           'bg-yellow-600',
           'bg-teal-600',
      ],
      isTitleShowing: true,
    }

  },
  methods:{
    makeActive(index){
      this.currentSlide = index;
    }
  },
  mounted() {
   this.interval = setInterval(()=>{
      //console.log('I am changing current slide', this.currentSlide)
     this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide+1
      // if (this.currentSlide === 2){
      //   this.currentSlide =0
      // }else{
      //   this.currentSlide++
      // }
    },1000)
  },
  beforeUnmount() {
    clearInterval(this.interval);
  }
}
</script>

<style >
.fade-enter-active,
.fade-leave-active {
  transition:all 1s ease ;
}
.fade-enter-from{
  opacity: 0;
  transform: translateX(-100%);
}
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(100%);
}
</style>