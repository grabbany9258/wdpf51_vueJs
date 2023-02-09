<template >
    <div>       
      {{ obj.nested.count }}
      <p>{{ obj.arr }}</p>

      <button @click="mutateDeeply">Click Here</button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      obj: {
        nested: { count: 0 },
        arr: ['foo', 'bar']
      }
    }
  },
  methods: {
    mutateDeeply() {
      // these will work as expected.
      this.obj.nested.count++
      this.obj.arr.unshift('baz')
    }
  }
}

</script>