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
    <i-form info="publish" ref="iForm" @submitCb="submitCb"></i-form>
  </div>
</template>

<script>
import IForm from '../../components/common/IForm'
import { createReviews } from '../../api/goods/goods'

export default {
  components: {
    IForm
  },
  data () {
    return {

    }
  },
  created () {
    let { goods_id } = this.$route.query
    this.goods_id = parseInt(goods_id)
  },
  methods: {
    onClickLeft () {
      this.$router.push('/me')
    },
    onClickRight () {
      this.$refs.iForm.onSubmit()
    },
    submitCb (d) {
      createReviews({ goods_id: this.goods_id, grade: d.rate, content: d.comment, type: 2 }).then(res => {
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
</script>

<style>
</style>