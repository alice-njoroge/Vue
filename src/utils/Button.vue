<script>
import Label from "@/utils/Label.vue";

export default {
  name: "button",
  components:{
    Label
  },
  props:{
    label:{
      type:String,
      default: 'Click me'
    }
  },
  methods:{
    onClick(){
      this.$emit('buttonClick');
    }
  }

}
</script>

<template>
<button @click="onClick"> <Label :label="label" ></Label> </button>
</template>

<style scoped>

</style>