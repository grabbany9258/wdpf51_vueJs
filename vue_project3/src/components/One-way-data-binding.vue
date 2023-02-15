<!-- <template>
  <p
    v-bind:class="{
      bold: false,
      italic: false,
      valid: isValid,
      invalid: !isValid,
    }"
  >
    Today is Monday!
  </p>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isValid: false,
    };
  },
};
</script>

<style>
.bold {
  font-weight: bolder;
}
.italic {
  font-style: italic;
}
.valid {
  color: forestgreen;
}
.invalid {
  color: orangered;
}
</style> -->


<!-- Another  -->

<template>
  <p>Moustache syntax wraps the data property in double curly braces.</p>
  <p v-pre>Example: {{ name }}</p>

  <p>The resulting output will be the value of the data property.</p>
  <p>Example: {{ name }}</p>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "John Doe",
    };
  },
};
</script>
