<script>
export default {
  name: "Label",
  props:{
    label:{
      type:String,
      default: 'click label'
    }
  }
}
</script>

<template>
<span>{{ label }}</span>
</template>

<style scoped>

</style>