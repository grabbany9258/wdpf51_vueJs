<template>
  <h1>Hello {{ name }}</h1> 
  <p>Age:{{ age }}, Address: {{ address }} </p>
  <p v-text="address"></p> 
  <div>{{ college }}</div>
  <div v-html="college"></div>  
  <div v-bind:id="dynamicId">{{ address }}</div> 
  <div v-bind:class="{ active:ifActive, error:!ifActive }">{{ address }}</div>
  
  
</template>

<script>
export default{
  data(){
    return{
name:'Rabbany', 
age:27,
address: "Mirpur",
college: '<b> Dhaka College </b>',
ifActive:true
    }
  }
}
</script>

<style>
  #dynamicId{
    color: aqua;
  }
  .error{
    color: red;
  }
  .active{
    color: green;
  }

</style>