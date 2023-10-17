<script>

export default {
  name: "Heading",
  props:{
    title:''
  }

}
</script>

<template>
  <div class="card-body mt-3 mx-12">
    <nav class="navbar navbar-light bg-light justify-content-center">
      <span class="navbar-brand text-center mb-0 h1">{{title}} </span>
    </nav>
  </div>
</template>

<style scoped>

</style>