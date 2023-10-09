<script>

import Input from "@/utils/Input.vue";
import Button from "@/utils/Button.vue";
import Checkbox from "@/utils/Checkbox.vue";

export default {
  name: "Form",
  components: {
    Checkbox,
    Input,
    Button
  },
  computed: {

    }
}
</script>

<template>
  <form>

    <Input label-name="First Name" input-id="firstName" input-placeholder="first name"></Input>
    <Input label-name="Last Name" input-id="lastName" input-placeholder="last name" ></Input>
    <Input label-name="Password" input-id="password" input-placeholder="password" input-type="password" ></Input>

    <Checkbox check-id="exampleCheck1" check-name="Check me out"></Checkbox>

    <Button label="Submit" class="btn btn-primary"></Button>
  </form>
</template>

<style scoped>

</style>