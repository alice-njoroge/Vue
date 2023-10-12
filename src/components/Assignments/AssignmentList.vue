<script>

import Assignment from "@/components/Assignments/Assignment.vue";

export default {
  name: "AssignmentList",
  components: {Assignment},
  props: {
    assignments: Array,
    title: String,
  },

  data() {
    return {
      currentTag: 'all'

    }
  },

  computed: {
    tags() {
      return ['all', ...new Set(this.assignments.map(a => a.tag))];
    },
    filteredAssignments() {
      if (this.currentTag === 'all') {
        return this.assignments;
      }
      return this.assignments.filter(a => a.tag === this.currentTag);
    }
  }

}
</script>

<template>

  <!-- TODO: extract the container class and the card into another component-->
  <div v-show="assignments.length">
    <div class="div d-flex justify-content-center">
      <button
          class="small mx-2 px-2"
          :class="{
           'btn btn-primary': tag === currentTag}"
          v-for="tag in tags"
          @click="currentTag = tag"> {{ tag }}
      </button>
    </div>
    <p><strong> {{ title }} <span> ({{ assignments.length }}) </span> </strong></p>
    <div class="mb-3">
      <ul>
        <assignment
            v-for="assignment in filteredAssignments"
            :key="assignment.id"
            :assignment="assignment"
        >
        </assignment>
      </ul>
    </div>
  </div>


</template>

<style scoped>

</style>