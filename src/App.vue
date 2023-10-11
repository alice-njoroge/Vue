<template>
  <div class="container">
    <div class="card mt-6 mr-6">
      <div class="card-body mx-auto">
        <assignments></assignments>
      </div>
    </div>
  </div>

</template>

<script>
import Button from "@/components/utils/Button.vue";
import Assignments from "@/components/Assignments/Assignments.vue";


export default {
  components:{
    Button,
    Assignments,
  },
}
</script>

<style scoped>

</style>