<script>
export default {
  name: "Input",
  props:{
    labelName:{
      type:String,
      default:''
    },
    inputId:{
      type:String,
      default:''
    },
    inputType:{
      type:String,
      default: 'text'
    },
    inputPlaceholder:{
      type:String,
      default: ''
    },
    useSmall:{
      type:Boolean,
      default:false
    },
    smallMessage:{
      type:String,
      default:''
    },
    value:{
      type:String,
      default:''
    }
  },
  data(){
    return{
      val: this.value
    }
  },
  methods:{
    onInput(){
      this.$emit('keyInput', this.val);
    }
  }
}
</script>

<template>
  <div class="form-group">
    <label :for="inputId">{{labelName}}</label>
    <input v-model="val" @input="onInput" :type="inputType" class="form-control" :id="inputId" aria-describedby="smallHelp" :placeholder="inputPlaceholder">
    <small v-if="useSmall" id="smallHelp" class="form-text text-muted">{{smallMessage}}</small>
  </div>
</template>

<style scoped>

</style>