<template>
  <div class="i-comment-list">
    <comment-content
      v-for="item in reviewsData"
      :key="item.id"
      :grade="item.grade"
      :blog="item.t_blog"
      :user="item.t_user"
      :isShowComment="showComment"
      :isReviews="isReviews"
    ></comment-content>
  </div>
</template>

<script>
import CommentContent from './comment-content'
import { findReviews } from '../../api/goods/goods'

export default {
  components: {
    CommentContent,
  },
  data () {
    return {
      reviewsData: [],
      showComment: false,
      isReviews: true
    }
  },
  created () {
    findReviews(this.$route.params.id).then((res) => {
      if (res.errCode === 0) {
        this.reviewsData = res.data.map((item) => {
          item.t_user = item.t_blog.t_user
          return item
        })
      }
    })
  },
}
</script>

<style></style>
