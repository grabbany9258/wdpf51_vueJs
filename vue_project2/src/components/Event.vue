<template>
  {{ name }}

  <button @click="name = 'rabbany'">Click Here</button>
  <button @mouseover="setName('Tokey')">Name Change with Method</button>
  <hr />
  {{ count }}
  <h1 @mouseover="count++">{{ count }}</h1>
  <hr />
  <h1 @mouseover="count--">{{ count }}</h1>

  {{ increament }}
  <button @click="increament += 5">increament</button>
  {{ decreament }}
  <button @click="decreament -= 5">decreament</button>
  <hr />
  <button @click="greet">Show Alert</button>
</template>

<script>
export default {
  data() {
    return {
      name: "Rafiq",
      //   for count
      count: 0,
      // for count decrease

      increament: 0,
      decreament: 0,
    };
  },
  methods: {
    setName(x) {
      this.name = x;
    },
    greet(event) {
      alert(`Hello ${this.name}`);
    },
  },
};
</script>

<style>
</style>