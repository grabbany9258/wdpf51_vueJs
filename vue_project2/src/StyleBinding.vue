<template >
  <div>
    <div :class="classObject">Hello</div>
    <button @click="toggleActive">Toggle</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
      error: null,
    };
  },
  computed: {
    classObject() {
      return {
        active: this.isActive && !this.error,
        //error:  !this.error,
      };
    },
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style>
.active {
  background-color: aquamarine;
}
</style>