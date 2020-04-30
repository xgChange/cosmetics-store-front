<template>
  <div class="i-comment-list">
    <comment-content v-for="item in reviewsData" :key="item.id" :item="item"></comment-content>
  </div>
</template>

<script>
import CommentContent from './comment-content'
import { findReviews } from '../../api/goods/goods'

export default {
  components: {
    CommentContent
  },
  data () {
    return {
      reviewsData: []
    }
  },
  created () {
    findReviews(this.$route.params.id).then(res => {
      if (res.errCode === 0) {
        this.reviewsData = res.data
      }
    })
  }
}
</script>

<style>
</style>