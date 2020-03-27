<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created() {}
}
</script>

<style scoped lang="scss">
.hello {
  padding: 0 1px;
}
</style>
