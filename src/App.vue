<template>
  <div class="container">

    <div v-show="inProgressAssignments.length" class="card mt-6 mr-6">
      <div class="card-body mx-auto">
        <p><strong> In Progress Assignments </strong></p>
        <div class="mb-3">
          <ul>
            <li v-for="assignment in inProgressAssignments">
              <label>
                {{ assignment.name }}
                <input type="checkbox" v-model="assignment.complete" :key="assignment.id">
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>


    <div v-show="completeAssignments.length" class="card mt-6 mr-6">
      <div class="card-body mx-auto">
        <p><strong> Completed </strong></p>
        <div class="mb-3">
          <ul>
            <li v-for="assignment in completeAssignments">
              <label>
                {{ assignment.name }}
                <input type="checkbox" v-model="assignment.complete" :key="assignment.id">
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>


</template>

<script>
export default {
  data() {
    return {
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

  methods: {
    toggle() {
      this.active = !this.active;
    }
  }
}
</script>

<style scoped>

</style>