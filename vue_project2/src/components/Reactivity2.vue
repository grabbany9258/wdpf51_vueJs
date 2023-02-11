<template >
  <div>
    {{ count }}
    <!-- <button @click="increment">Click Here</button> -->
    <button v-on:click="increment">Click Here</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
  mounted() {
    // methods can be called in lifecycle hooks, or other methods!
    this.increment();
    console.log(this.count);
  },
};
</script>