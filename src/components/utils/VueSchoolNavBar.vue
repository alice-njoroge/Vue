<script>
import Button from "@/components/utils/Button.vue";

export default {
  name: "VueSchoolNavBar",
  components: {Button}
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="nav-link active" to="/"> Home </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">

          <router-link class="nav-link" to="/about">About Us</router-link>
          <router-link class="nav-link" to="/contact"> Contact </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>