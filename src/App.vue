<template>
 <div class="container">
   <p> {{message.key}}</p>
   <button type="button" v-on:click="clickButton"  class="btn btn-primary mb-3 red">Base class</button>

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
      }
    }
  },

  methods:{
    clickButton (){
      alert(this.message.key)
    }
  }
}
</script>

<style scoped>
.red {
  background-color: indianred;
}
</style>