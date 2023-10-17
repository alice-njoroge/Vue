<script>
import Heading from "@/components/utils/Heading.vue";
import NewsCard from "@/components/nytimes/NewsCard.vue";
import NewsList from "@/components/nytimes/NewsList.vue";
import axios from "axios";

const api = import.meta.env.VITE_NYT_API_KEY


export default {
  name: "layout",
  components: {
    NewsList,
    Heading,
    NewsCard
  },
  data(){
    return{
      section:"home",
      posts:[],
      title:''
    }
  },
  methods:{
    async fetchNews(){
      try {
        const url = `https://api.nytimes.com/svc/topstories/v2/${this.section}.json?api-key=${api}`
        const response = await axios.get(url)

        const results = response.data.results
        console.log(results)
        this.posts = results.map(post => ({
          title: post.title,
          abstract: post.abstract,
          url: post.url,
          byline: post.byline,
          published_date: post.published_date,
          image_url: post.multimedia && post.multimedia[0].url
        }));
      }catch (err) {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          console.log("Server Error:", err)
        }
        else if (err.request) {
          // client never received a response, or request never left
          console.log("Network Error:", err)
        }
        else {
          console.log("Client Error:", err)
        }
      }
    }
  },
  beforeMount() {
    this.fetchNews()
  }
}
</script>

<template>
  <heading title="Vue News | NYTimes Edition"></heading>
  <news-list :posts="posts"></news-list>

</template>

<style scoped>

</style>