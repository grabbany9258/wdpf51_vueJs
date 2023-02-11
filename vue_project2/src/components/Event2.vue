<template>
  <button @click="warn('Dont click Here', $event)">Click Here</button>
</template>

<script>
export default {
  methods: {
    warn(message, event) {
      if (event) {
        event.preventDefault();
      }
      alert(message);
    },
  },
};
</script>

<style>
</style>