<script>

export default {
  name: "AssignmentList",
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
            <li v-for="assignment in assignments">
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

<style scoped>

</style>