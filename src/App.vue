<template>
  <vue-school-nav-bar></vue-school-nav-bar>
  <div class="container">
    <the-navigation></the-navigation>
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
import TheNavigation from "@/routes/TheNavigation.vue";
import VueSchoolNavBar from "@/components/utils/VueSchoolNavBar.vue";


export default {
  components: {
    VueSchoolNavBar,
    TheNavigation,
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