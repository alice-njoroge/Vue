<script>
import Label from "@/utils/Label.vue";

export default {
  name: "button",
  components: {
    Label
  },
  props: {
    label: {
      type: String,
      default: 'Click me'
    },
    isProcessing: {
      type: Boolean,
      default: false
    },
    buttonType:{
      type:String,
      default:'button'
    }
  },
  methods: {
    onClick() {
      this.$emit('buttonClick');
    }
  }

}
</script>

<template>
  <button
      @click="onClick"
      :type="buttonType"
      :class="{
        'border rounded m-2 px-5 py-2 ':true,
        'is-loading': isProcessing
        }"
      :disabled="isProcessing"
  >
    <Label :label="label"></Label>
  </button>

</template>

<style scoped>

</style>