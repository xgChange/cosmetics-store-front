<template>
  <div class="i-comment-list">
    <comment-content></comment-content>
    <comment-content></comment-content>
    <comment-content></comment-content>
    <comment-content></comment-content>
  </div>
</template>

<script>
import CommentContent from './comment-content'
export default {
  components: {
    CommentContent
  },
  created () {
    console.log('ddd')
  }
}
</script>

<style>
</style>