<template>
  <div>这是侧边内容{{this.$route.query.title}}</div>
</template>

<script>
export default {
  props: {
    s: {
      type: Number
    }
  },
  created () {
    console.log(this.s)
  }
}
</script>

<style></style>
