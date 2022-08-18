import {ref}  from 'vue'
export default function useCounter(initialCount = 0, stepSize =1){
   const count = ref(initialCount)
   //const count = ref(0)
    function incrementCount(){
       count.value +=stepSize
       //count.value +=1
    }
    return {
        count,
        incrementCount
    }
}