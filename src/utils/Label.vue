<script>
export default {
  name: "Label",
  props:{
    label:{
      type:String,
      default: 'default label'
    },
    for:{

    }
  }
}
</script>

<template>
<span>{{ label }}</span>
</template>

<style scoped>

</style>