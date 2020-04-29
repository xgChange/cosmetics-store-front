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
export default {
  components: {
    IForm
  },
  methods: {
    onClickLeft () {
      this.$router.push('/me')
    },
    onClickRight () {
      this.$refs.iForm.onSubmit()
    },
    submitCb (d) {
      console.log(d)
    }
  }
}
</script>

<style>
</style>