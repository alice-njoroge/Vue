<script>

import Assignment from "@/components/Assignments/Assignment.vue";

export default {
  name: "AssignmentList",
  components: {Assignment},
  props:{
    assignments:Array,
    title:String,
  },

}
</script>

<template>

  <div class="container">
    <div v-show="assignments.length" class="card mt-6 mr-6">
      <div class="card-body mx-auto">
        <p><strong> {{title}} </strong></p>
        <div class="mb-3">
          <ul>
            <assignment
                v-for="assignment in assignments"
                :key="assignment.id"
                :assignment="assignment"
            >
            </assignment>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>