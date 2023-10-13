<script>
import { format } from "date-fns";
export default {
  name: "NewsCard",
  props: {
    post:{
      type:Object,
      required:true
    }
  },
  methods: {
    formatDate(strDate) {
      return format(new Date(strDate), "MMMM do, yyyy")
    },
  }
}
</script>

<template>
  <div class="card" style="width: 18rem">
    <img class="card-img-top" :src="post.image_url" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{post.title}}</h5>
      <p class="card-text">{{ post.abstract }}</p>
      <p class="mt-3"> {{ formatDate(post.published_date) }}  </p>
    </div>
  </div>
</template>

<style scoped>

</style>