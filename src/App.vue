<template>
  <div class="container">
    <heading title="Title Text | Goes Here "></heading>
    
    <router-link to="/"></router-link>
    <router-link to="/about"></router-link>

    <router-view></router-view>

  </div>
</template>

<script>
import Button from "@/components/utils/Button.vue";
import Assignments from "@/components/Assignments/Assignments.vue";
import Layout from "@/components/nytimes/Layout.vue";
import Heading from "@/components/utils/Heading.vue";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";



export default {
  components:{
    About,
    Home,
    Heading,
    Layout,
    Button,
    Assignments,
  },

}
</script>

<style scoped>

</style>