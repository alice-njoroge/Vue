<script>
import AssignmentList from "@/components/Assignments/AssignmentList.vue";
import Input from "@/components/utils/Input.vue";
import Button from "@/components/utils/Button.vue";

export default {
  components: {
    Input,
    AssignmentList,
    Button
  },
  data() {
    return {
      newAssignment : '',
      assignments: [
        {name: "study Chapter 5", complete: false, id: 1},
        {name: "Conduct lab experiment", complete: false, id: 2},
        {name: "Research on the Thesis", complete: false, id: 3}
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
    addAssigment(){
      this.assignments.push(
          {
            name: this.newAssignment,
            complete: false,
            id: this.assignments.length + 1
          });
      this.newAssignment = '';
    },
    dataInput(value){
      this.newAssignment = value;
    }
  }

}
</script>

<template>
  <assignment-list title="In Progress" :assignments="filters.inProgress"/>
  <assignment-list title="Completed Tasks" :assignments="filters.complete"/>

  <hr>

  <form  @submit.prevent="addAssigment">
    <Input @key-input="dataInput" label-name="Add a New Assignment" placeholder="new task here..."></Input>
    <Button label="Submit" button-type="submit"></Button>
  </form>


</template>

<style scoped>

</style>