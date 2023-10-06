<template>
 <div class="container">
   <p> {{message.key}}</p>
   <button type="button" v-on:click="clickButton"  class="btn btn-light mb-3"  :class="textColor" >Base class</button>

   <div class="card mt-6 mr-6">
     <div class="card-body">

       <div class="mb-3">
         <label for="exampleFormControlInput1" class="form-label">Email address</label>
         <input type="email" class="form-control" v-model="message.key" id="exampleFormControlInput1" placeholder="name@example.com">
       </div>

     </div>
   </div>

 </div>


</template>

<script>
export default {
  data(){
    return{
      message: {
        key :"I am nested"
      },
      textColor: "text-green"
    }
  },

  methods:{
    clickButton (){
     this.textColor = "text-red"
    }
  }
}
</script>

<style scoped>
.text-red {
  color: red;
}
.text-green{
  color: green;
}
</style>