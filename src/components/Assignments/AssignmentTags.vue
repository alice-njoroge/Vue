<script>



export default {
  name: "AssignmentTags",
  props:{
    initialTags: Array,
    currentTag: String

  },

  computed:{
    tags() {
      return ['all', ...new Set(this.initialTags)];
    },
  },
}
</script>

<template>
  <button
      class="small mx-2 px-2"
      v-for="tag in tags"
      :class="{ 'btn btn-primary': tag === currentTag }"
      @click="$emit('update:currentTag', tag)"
  > {{tag}}
  </button>


</template>

<style scoped>

</style>