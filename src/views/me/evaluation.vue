<template>
  <div class="i-evaluation">
    <div class="i-evaluation-top-bar">
      <van-nav-bar
        title="发表评论"
        left-arrow
        @click-left="onClickLeft"
        right-text="完成"
        @click-right="onClickRight"
      />
    </div>
    <i-form info="publish" ref="iForm" @submitCb="submitCb" @uploadSuccess="uploadSuccess"></i-form>
  </div>
</template>

<script>
import IForm from '../../components/common/IForm'
import { createReviews } from '../../api/goods/goods'
import { publishBlog } from '../../api/blogs/blogs'

export default {
  components: {
    IForm
  },
  data () {
    return {
      key: '',
      picture: ''
    }
  },
  created () {
    let { goods_id, key } = this.$route.query
    this.goods_id = parseInt(goods_id)
    this.key = key
  },
  methods: {
    onClickLeft () {
      this.$router.push('/me')
    },
    onClickRight () {
      this.$refs.iForm.onSubmit()
    },
    uploadSuccess (d) {
      this.picture = d
    },
    submitCb (d) {
      if (d && d.picture) {
        d.picture = d.picture.join('')
      }
      d.picture = this.picture
      if (this.key === 'blog') {
        publishBlog({ content: d.comment, type: 1, picture: d.picture }).then(res => {
          if (res.errCode === 0) {
            this.$toast.success({
              forbidClick: true,
              message: '评论成功!',
              onClose: () => {
                this.$router.replace('/blogs')
              }
            })
          }
        })
      } else {
        createReviews({ goods_id: this.goods_id, grade: d.rate, content: d.comment, type: 2, picture: d.picture }).then(res => {
          if (res.errCode === 0) {
            this.$toast.success({
              forbidClick: true,
              message: '评论成功!',
              onClose: () => {
                this.$router.replace('/me')
              }
            })
          }
        })
      }

    }
  }
}
</script>

<style>
</style>