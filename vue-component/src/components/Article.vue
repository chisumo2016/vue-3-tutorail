<template>
  <div>
    <h1>Article Component</h1>
    <h2 v-bind="$attrs">{{ title }}</h2>
    <h2>Likes - {{ likes}}</h2>
    <h2>Published - {{ isPublished ? 'Yes': 'No'}}</h2>
  </div>
</template>

<script>
export default {
  name: "Article",
  props:{
    title: {
      type:String,  //prop types
      required : true,
      default: 'Article Title'
    },
    likes: Number,
    isPublished: Boolean
  },
  inheritAttrs: false  //prevent non pro to be applied to root
}
</script>

<style scoped>

</style>