<script>
import AssignmentList from "@/components/Assignments/AssignmentList.vue";
import Input from "@/components/utils/Input.vue";

export default {
  components: {Input, AssignmentList},
  data(){
    return{
      assignments: [
        {name: "study Chapter 5", complete: false, id:1},
        {name: "Conduct lab experiment", complete: false, id:2},
        {name: "Research on the Thesis", complete: false, id:3}
      ]
    }
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter(assignment => !assignment.complete),
        complete: this.assignments.filter(assignment => assignment.complete)
      }

    }
  },

}
</script>

<template>
  <assignment-list title="In Progress" :assignments="filters.inProgress"/>
  <assignment-list title="Completed Tasks" :assignments="filters.complete"/>

  <Input placeholder="new task here..."></Input>

</template>

<style scoped>

</style>