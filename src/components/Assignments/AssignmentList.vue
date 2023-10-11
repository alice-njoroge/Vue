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

  <!-- TODO: extract the container class and the card into another component-->
    <div v-show="assignments.length">
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


</template>

<style scoped>

</style>