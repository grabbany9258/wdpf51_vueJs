<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-4">
        <h2>Shopping Cart</h2>
        <h1>{{ $store.state.counter }}</h1>
        <p>Counter: {{ $store.getters.getCounter }}</p>
        <p>Normalized: {{ $store.getters.getNormalizedCounter }}</p>
        <!-- <button @click="$store.state.counter++">Click Here</button> -->
        <button @click="$store.commit('increament', 50)">Click Here</button>
        <!-- global access -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>