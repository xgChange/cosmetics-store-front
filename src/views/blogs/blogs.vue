<template>
  <div class="i-blog">
    <div class="i-cart-top-bar">
      <van-nav-bar title="论坛" right-text="发表" @click-right="onClickRight" />
    </div>
    <div v-if="!isEmpty">
      <comment-content
        v-for="item in blogList"
        :key="item.id"
        :blog="item"
        :user="item.t_user"
        :isShowComment="showComment"
      ></comment-content>
    </div>
    <div v-else>暂无信息</div>
  </div>
</template>

<script>
import CommentContent from '../../components/comment/comment-content'
import { getAllBlogsByIndex } from '../../api/blogs/blogs'

export default {
  components: {
    CommentContent,
  },
  created () {
    this.initBlogList()
  },
  data () {
    return {
      blogList: [],
      isEmpty: false,
      pageIndex: 1,
      showComment: true,
      isBlog: true
    }
  },
  methods: {
    initBlogList () {
      getAllBlogsByIndex(1).then(res => {
        if (res.errCode === 0) {
          this.blogList = res.data.blogList
          this.isEmpty = res.data.isEmpty
        }
      })
    },
    onClickRight () {
      this.$router.push({ path: '/publish', query: { key: 'blog' } })
    }
  }
}
</script>

<style></style>
