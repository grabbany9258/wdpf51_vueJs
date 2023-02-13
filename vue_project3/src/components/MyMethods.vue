<!-- <template>
  <p>{{ greeting() }}</p>
</template>
<script>
export default {
  data() {
    return {
      username: "John",
    };
  },
  methods: {
    greeting() {
      return "Hello there " + this.username;
    },
  },
};
</script>
<style>
</style> -->

<!-- Another -->

<!-- <template>
  <p>{{ greeting("Allah") }}</p>
</template>

<script>
export default {
  methods: {
    greeting(name) {
      return "Help us " + name;
    },
  },
};
</script> -->

<!-- Arrow function -->

<!-- <template>
  <p>{{ greeting("Rabbany") }}</p>
</template>

<script>
export default {
  methods: {
    greeting: (name) => {
      return "Help us " + name;
    },
  },
};
</script> -->

<!-- Multiple Parametter  -->

<!-- <template>
  <p>{{ greeting("Rabbany,", " How About You?") }}</p>
</template>

<script>
export default {
  methods: {
    greeting: (x, y) => {
      return "Hello " + x + y;
    },
  },
};
</script> -->

<!-- this in arrow function not work & methods not allow property -->

<!-- <template>
  <p>{{ thisInArrowFunc("Toki") }}</p>
  <p>{{ thisInRegularFunc() }}</p>
</template>

<script>
export default {
  data() {
    return {
      username: "Rabbany",
    };
  },
  methods: {
    // username: "Obi-Wan Kenobi",

    thisInArrowFunc: (name) => {
      // return "Help us " + this.username; // no 'this' binding
      return "Help us " + name; // use perametter here
    },

    thisInRegularFunc() {
      return "Help us " + this.username; // global 'this'
    },
  },
};
</script> -->

<!-- Methods list a () thakle upore {{}} a () dite hbe -->

<template>
  <p>{{ greeting() }}</p>
</template>

<script>
export default {
  methods: {
    greeting() {
      return "Hello Toki";
    },
  },
};
</script>