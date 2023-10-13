<script>
import NewsCard from "@/components/nytimes/NewsCard.vue";

export default {
  name: "NewsList",
  components: {NewsCard},
  props:{
    posts:{
      type:Array,
      required:true
    }
  }
}
</script>

<template >
  <div class="row">
    <news-card class="p-2 m-3"
        v-for="(post, index) in posts"
        :key="index"
        :post="post">
    </news-card>
  </div>
</template>

<style scoped>

</style>