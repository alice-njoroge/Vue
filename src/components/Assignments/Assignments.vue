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
      assignments: [
        {name: "study Chapter 5", complete: false, id: 1, tag: 'Math'},
        {name: "Conduct lab experiment", complete: false, id: 2, tag: 'Math'},
        {name: "Research on the Thesis", complete: false, id: 3, tag: 'Science'}
      ],
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