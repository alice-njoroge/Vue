<script>
export default {
  name: "Assignment",
  props:{
    assignment:Object
  }
}
</script>

<template>
  <li class="border-top py-2  d-flex justify-content-between">
    <label>
      {{ assignment.name }}
      <input
          type="checkbox"
          v-model="assignment.complete"
      >
    </label>
  </li>
</template>

<style scoped>

</style>