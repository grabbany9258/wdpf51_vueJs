<template >
  <div>
    {{ firstName }} {{ lastName }}
    {{ fullName }}
    <!-- <button @click=""></button> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
    };
  },
  computed: {
    fullName: {
      // getter
      get() {
        return this.firstName + " " + this.lastName;
      },
      // setter
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        [this.firstName, this.lastName] = newValue.split(" ");
      },
    },
  },
};
</script>