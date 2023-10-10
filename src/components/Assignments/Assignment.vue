<script>
export default {
  name: "Assignment",
  props:{
    assignment:Object
  }
}
</script>

<template>
  <li >
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