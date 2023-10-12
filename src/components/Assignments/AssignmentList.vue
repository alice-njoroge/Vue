<script>

import Assignment from "@/components/Assignments/Assignment.vue";
import Button from "@/components/utils/Button.vue";
import AssignmentTags from "@/components/Assignments/AssignmentTags.vue";


export default {
  name: "AssignmentList",
  components: {
    Button,
    Assignment,
    AssignmentTags
  },
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
    <assignment-tags
        :initial-tags="assignments.map(a => a.tag)"
        :current-tag="currentTag"
        @change="currentTag = $event"
    >

    </assignment-tags>

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