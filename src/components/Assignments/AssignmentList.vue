<script>

import Assignment from "@/components/Assignments/Assignment.vue";
import Button from "@/components/utils/Button.vue";


export default {
  name: "AssignmentList",
  components: {Button, Assignment},
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

      <Button
          v-for="tag in tags"
          :label="tag"
          :class = "{
            'btn btn-primary': tag === currentTag
          }"
          @click ="currentTag = tag"
      >

      </Button>

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