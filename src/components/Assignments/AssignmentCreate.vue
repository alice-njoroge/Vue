<script>
import Button from "@/components/utils/Button.vue";
import Input from "@/components/utils/Input.vue";

export default {
  name: "AssignmentCreate",
  components: {
    Input,
    Button
  },

  data() {
    return {
      newAssignment: ''
    }
  },

  methods:{
    addAssignment (){
      this.$emit('add', this.newAssignment);
    },
    dataInput(value){
      this.newAssignment = value;
    }

  }
}
</script>

<template>

  <form  @submit.prevent="addAssignment">
    <Input   @key-input="dataInput" label-name="Add a New Assignment" placeholder="new task here..."></Input>
    <Button label="Submit" button-type="submit"></Button>
  </form>

</template>

<style scoped>

</style>