<template >
  <ol>
    <li v-for="(fruit, index) in fruits" :key="index">
      {{ fruit }} {{ [index] }}
    </li>
  </ol>
</template>
<script>
export default {
  data() {
    return {
      fruits: ["mango", "Orange", "Grape", "Banana"],
    };
  },
};
</script>
<style >
</style>