<script>
import AssignmentList from "@/components/Assignments/AssignmentList.vue";

export default {
  components: {AssignmentList},
  data(){
    return{
      assignments: [
        {name: "study Chapter 5", complete: false, id:1},
        {name: "Conduct lab experiment", complete: false, id:2},
        {name: "Research on the Thesis", complete: false, id:3}
      ]
    }
  },

  computed:{
    completeAssignments(){
      return this.assignments.filter(a=>a.complete);
    },
    inProgressAssignments(){
      return this.assignments.filter(a=>!a.complete);
    }
  },

}
</script>

<template>
<assignment-list title="In Progress" :assignments="inProgressAssignments"/>
<assignment-list title="Completed Tasks" :assignments="completeAssignments"/>

</template>

<style scoped>

</style>