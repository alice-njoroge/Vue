<script>

export default {
  name: "Checkbox",
  props: {
    checkType: {
      type: String,
      default: 'checkbox'
    },
    checkId: {
      type: String,
      default: ''
    },
    checkName: {
      type: String,
      default: ''
    }
  }

}
</script>

<template>
  <div class="form-check">
    <input :type="checkType" class="form-check-input" :id="checkType">
    <label class="form-check-label" :for="checkType">{{ checkName }}</label>
  </div>
</template>

<style scoped>

</style>