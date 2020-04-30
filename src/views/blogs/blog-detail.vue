<template>
  <div class="i-blog-detail">
    <div class="i-order-top-bar">
      <van-nav-bar title="评论详情" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="i-comment-box" v-if="commentData && commentData.length > 0">
      <comment-content
        :user="item.t_user"
        :replies="item.t_replies"
        :blog="{content: item.content, createdAt: item.createdAt, id: item.id}"
        v-for="item in commentData"
        :key="item.id"
      ></comment-content>
    </div>
    <div v-else>暂无信息</div>
  </div>
</template>

<script>
import CommentContent from '../../components/comment/comment-content'
import { getComment } from '../../api/blogs/blogs'

export default {
  data () {
    return {
      commentData: [],
      isBlog: false
    }
  },
  created () {
    const { id } = this.$route.params
    this.initData(id)
  },
  methods: {
    initData (id) {
      getComment(id).then(res => {
        this.commentData = res.data
      })
    },
    onClickLeft () {
      this.$router.go(-1)
    }
  },
  components: {
    CommentContent
  }
}
</script>

<style></style>
