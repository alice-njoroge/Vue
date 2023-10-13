<script>
import AssignmentList from "@/components/Assignments/AssignmentList.vue";
import AssignmentCreate from "@/components/Assignments/AssignmentCreate.vue";


export default {
  components: {
    AssignmentCreate,
    AssignmentList,
  },
  data() {
    return {
      assignments: []
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
  created() {
    fetch('http://localhost:3000/assignments')
        .then(response => response.json())
        .then(assignments => {
          this.assignments = assignments;
        });
  },

  methods:{
    add(name){
      this.assignments.push(
          {
            name: name,
            complete: false,
            id: this.assignments.length + 1
          });
    },
  }

}
</script>

<template>
  <assignment-list title="In Progress" :assignments="filters.inProgress"/>
  <assignment-list title="Completed Tasks" :assignments="filters.complete"/>
  <assignment-create @add="add"></assignment-create>

  <hr>

</template>

<style scoped>

</style>